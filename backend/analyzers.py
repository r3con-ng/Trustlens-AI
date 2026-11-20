from __future__ import annotations

import ipaddress
import re
from urllib.parse import urlsplit


def _indicator(name: str, evidence: str, strength: str = "contextual") -> dict[str, str]:
    return {"name": name, "evidence": evidence, "source": "local_analysis", "strength": strength}


def analyze_url(raw_url: str) -> dict:
    value = raw_url.strip()
    if len(value) > 2048:
        raise ValueError("URL is too long. Please enter a shorter link.")

    candidate = value if re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*://", value) else f"https://{value}"
    try:
        parsed = urlsplit(candidate)
        host = parsed.hostname
        _ = parsed.port  # Accessing this validates malformed ports.
    except ValueError as exc:
        raise ValueError("This link could not be parsed. Check it and try again.") from exc

    if parsed.scheme.lower() not in {"http", "https"} or not host:
        raise ValueError("Enter a link with a valid web address, such as example.com.")

    indicators: list[dict[str, str]] = []
    if parsed.scheme.lower() == "http":
        indicators.append(_indicator("unencrypted_connection", "This link uses HTTP rather than HTTPS."))

    try:
        ipaddress.ip_address(host)
        is_ip = True
    except ValueError:
        is_ip = False
    if is_ip:
        indicators.append(_indicator("ip_address_host", "The link points to a numeric IP address instead of a domain name."))

    labels = host.rstrip(".").split(".")
    if len(labels) >= 5:
        indicators.append(_indicator("many_subdomains", f"The domain has {len(labels) - 2} subdomain levels."))

    if len(value) > 100:
        indicators.append(_indicator("long_url", "This link is unusually long. Long links can be legitimate, so check the destination carefully."))

    lower_host = host.lower()
    if lower_host.startswith("xn--") or ".xn--" in lower_host:
        indicators.append(_indicator("internationalized_domain", "The domain uses an internationalized encoding that can make characters look similar."))

    tokens = {"login", "verify", "verification", "secure", "account", "update", "password", "payment", "claim", "offer"}
    host_path = f"{lower_host}{parsed.path.lower()}"
    found = sorted(token for token in tokens if token in host_path)
    if found:
        indicators.append(_indicator("sensitive_action_words", f"The address includes terms related to sensitive actions: {', '.join(found[:4])}. Context matters; these words alone do not prove fraud."))

    assessment = "potentially_suspicious" if len(indicators) >= 2 else "inconclusive" if indicators else "no_known_issue_found"
    if assessment == "potentially_suspicious":
        summary = "Several link characteristics deserve a closer look. This is not proof that the site is fraudulent."
    elif assessment == "inconclusive":
        summary = "The local checks found no strong signal either way. That does not guarantee this link is safe."
    else:
        summary = "The local structural checks found no common warning signal. This does not prove the link is safe."

    return {
        "assessment": assessment,
        "summary": summary,
        "indicators": indicators,
        "checks": [
            {"name": "link_structure", "status": "completed", "detail": "The address was parsed locally; the destination was not opened."},
            {"name": "reputation", "status": "not_configured", "detail": "No external reputation provider is connected."},
        ],
        "recommendations": [
            "Do not enter passwords, one-time codes or payment details unless you independently verify the site.",
            "If this link claims to be from an organization, open its official app or type its known address yourself.",
        ],
        "limitations": ["A link can be harmful even when these checks find no warning.", "The destination was not visited and external reputation was not checked."],
    }


URL_PATTERN = re.compile(
    r"(?:https?://|www\.)[^\s<>\[\]{}\"']+|"
    r"(?<![@/])\b(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+"
    r"(?:com|in|net|org|co|vip|info)(?:/[^\s<>\[\]{}\"']*)?",
    re.I,
)
URL_TRAILING_PUNCTUATION = ".,;:!?)]}"


def extract_urls(text: str, limit: int = 5) -> list[str]:
    """Extract a few link strings without resolving or requesting them."""
    found: list[str] = []
    seen: set[str] = set()
    for match in URL_PATTERN.finditer(text):
        candidate = match.group(0).rstrip(URL_TRAILING_PUNCTUATION)
        if candidate.lower().startswith("www."):
            candidate = f"https://{candidate}"
        key = candidate.lower()
        if candidate and key not in seen:
            found.append(candidate)
            seen.add(key)
        if len(found) >= limit:
            break
    return found


SIGNALS = [
    ("urgency", re.compile(r"\b(urgent|immediately|right now|within \d+ minutes?|act now|तुरंत|अभी|जल्दी)\b", re.I), "The message pressures you to act quickly."),
    ("account_threat", re.compile(r"\b(suspend(?:ed)?|block(?:ed)?|terminate|expire|locked|बंद|निलंबित)\b", re.I), "The message threatens account access or service."),
    ("credential_request", re.compile(r"\b(password|passcode|otp|one[- ]time code|login details|\bpin\b|पासवर्ड|ओटीपी|पिन)\b", re.I), "The message mentions a password, one-time code or PIN."),
    ("payment_request", re.compile(r"\b(pay|payment|fee|deposit|transfer|upi|processing charge|registration charge|भुगतान|फीस|जमा राशि)\b", re.I), "The message asks for or discusses a payment."),
    ("recruitment_fee", re.compile(r"\b(job|internship|offer letter|recruit(?:er|ment)|joining)\b.{0,70}\b(fee|deposit|payment|charge|registration)\b|\b(fee|deposit|payment|charge|registration)\b.{0,70}\b(job|internship|offer letter|recruit(?:er|ment)|joining)\b", re.I), "A job or internship message appears to connect an opportunity with a fee."),
]


def analyze_message(text: str) -> dict:
    message = text.strip()
    if len(message) > 5000:
        raise ValueError("Message is too long. Please keep it under 5,000 characters.")

    indicators = [_indicator(name, explanation) for name, pattern, explanation in SIGNALS if pattern.search(message)]
    embedded_url_reports: list[dict] = []
    for url in extract_urls(message):
        try:
            url_report = analyze_url(url)
        except ValueError:
            continue
        host = urlsplit(url if "://" in url else f"https://{url}").hostname or url
        embedded_url_reports.append({
            "display_host": host,
            "assessment": url_report["assessment"],
            "indicator_count": len(url_report["indicators"]),
        })
        for signal in url_report["indicators"]:
            combined_signal = dict(signal)
            combined_signal["scope"] = "link_in_message"
            combined_signal["evidence"] = f"A link in this message: {signal['evidence']}"
            indicators.append(combined_signal)
    if embedded_url_reports:
        indicators.append(_indicator("embedded_link", f"The message contains {len(embedded_url_reports)} link(s). Their addresses were checked locally; the sites were not opened."))

    assessment = "potentially_suspicious" if len(indicators) >= 2 else "inconclusive" if indicators else "no_known_issue_found"
    summaries = {
        "potentially_suspicious": "Several warning signals appear in this message. Review them before responding.",
        "no_known_issue_found": "The local checks found no common warning signals. This does not establish that the message is safe.",
        "inconclusive": "One or more signals need context. Review them before responding.",
    }
    recommendations = [
        "Never share an OTP, password, PIN or recovery code in response to a message.",
        "Verify requests using contact details from an official source you find independently.",
    ]
    if any(item["name"] == "recruitment_fee" for item in indicators):
        recommendations.insert(0, "Do not pay a recruitment or registration fee until you verify the employer through independently found official channels.")

    return {
        "assessment": assessment,
        "summary": summaries[assessment],
        "indicators": indicators,
        "checks": [
            {"name": "message_patterns", "status": "completed", "detail": "Local pattern checks ran on this text."},
            {"name": "embedded_url_structure", "status": "completed" if embedded_url_reports else "not_applicable", "detail": "Embedded link structure was analyzed locally; no destination was opened." if embedded_url_reports else "No links were found in this message."},
            {"name": "reputation", "status": "not_configured", "detail": "No external link reputation provider is connected."},
        ],
        "embedded_urls": embedded_url_reports,
        "recommendations": recommendations,
        "limitations": ["These language patterns are a basic prototype and may miss scams or flag legitimate messages.", "The message is not saved by this prototype."],
    }


CALL_SIGNALS = [
    ("digital_arrest_claim", re.compile(r"digital arrest|डिजिटल\s*अरेस्ट|डिजिटल\s*गिरफ्तारी", re.I), "The caller appears to use a ‘digital arrest’ claim. Authorities do not establish guilt through a video call."),
    ("authority_impersonation_claim", re.compile(r"(?:we are|i am|calling from|speaking from).{0,35}\b(police|cbi|ed|customs|rbi|trai|do\s*t|cyber cell|narcotics|court)\b|\b(police|cbi|customs|cyber cell)\s+(?:officer|department)\b.{0,25}(?:speaking|calling|here)|मैं.{0,20}(?:पुलिस|सीबीआई|कस्टम|साइबर सेल).{0,20}(?:से|बोल रहा|बोल रही)", re.I), "The caller claims to represent an authority. Verify independently using an official number."),
    ("arrest_or_legal_threat", re.compile(r"arrest warrant|you(?:'re| are) under arrest|case (?:has been )?registered|police (?:are )?coming|deport(?:ation)?|गिरफ्तार|गिरफ्तारी|वारंट|मुकदमा दर्ज|केस दर्ज", re.I), "The caller uses an arrest, legal-action or deportation threat to create pressure."),
    ("secrecy_pressure", re.compile(r"don't tell (?:anyone|your family|the bank)|keep (?:this|the call) secret|do not disconnect|stay on (?:the )?call|किसी को मत बत(?:ाओ|ाना)|परिवार को मत बत(?:ाओ|ाना)|कॉल मत काट(?:ो|ना)|फोन मत काट(?:ो|ना)", re.I), "The caller appears to discourage you from seeking help or ending the call."),
    ("remote_access_request", re.compile(r"\b(anydesk|teamviewer|quick.?support|remote access|screen.?share|share your screen|install this app)\b|स्क्रीन शेयर|रिमोट एक्सेस|ऐप इंस्टॉल", re.I), "The caller mentions remote access, screen sharing or installing an app."),
    ("secure_transfer_pressure", re.compile(r"transfer (?:(?:the|your) )?(?:money|funds|amount) to (?:a )?(?:safe|secure|verification) account|move (?:your )?money to (?:a )?safe account|send money to verify|सुरक्षित खाते में (?:पैसे|राशि) (?:भेज|ट्रांसफर)|सेफ खाते में पैसे ट्रांसफर|सुरक्षित खाते में पैसे भेज", re.I), "The caller appears to pressure you to transfer money to a ‘safe’ or verification account."),
    ("video_call_pressure", re.compile(r"video call|turn on (?:your )?camera|keep (?:the )?camera on|वीडियो कॉल|कैमरा चालू", re.I), "The caller asks you to stay on video or turn on your camera; consider this alongside other signals."),
]


def analyze_call_transcript(text: str) -> dict:
    """Analyze user-provided transcript text; this function never records call audio."""
    base = analyze_message(text)
    call_indicators = [
        _indicator(name, evidence)
        for name, pattern, evidence in CALL_SIGNALS
        if pattern.search(text)
    ]
    indicators = base["indicators"] + call_indicators
    assessment = "potentially_suspicious" if len(indicators) >= 2 else "inconclusive" if indicators else "no_known_issue_found"

    recommendations = [
        "If you feel pressured, end the call and contact the organization using a number from its official website or app.",
        "Do not share OTPs, PINs, passwords, identity documents or payment details during an unexpected call.",
    ]
    signal_names = {item["name"] for item in call_indicators}
    if "remote_access_request" in signal_names:
        recommendations.insert(0, "Do not install a remote-access app or share your screen at a caller’s request.")
    if "secure_transfer_pressure" in signal_names:
        recommendations.insert(0, "Do not transfer money to a ‘safe’, ‘holding’ or ‘verification’ account because a caller asks you to.")

    summaries = {
        "potentially_suspicious": "Several conversation signals deserve attention. This transcript cannot prove who called or whether a crime occurred.",
        "inconclusive": "The transcript contains limited or ambiguous signals. Verify any request independently.",
        "no_known_issue_found": "These checks found no common call-scam pattern in the transcript. That does not prove the call was legitimate.",
    }
    return {
        "assessment": assessment,
        "summary": summaries[assessment],
        "indicators": indicators,
        "checks": base["checks"] + [
            {"name": "call_transcript_patterns", "status": "completed", "detail": "Local pattern checks ran on user-provided transcript text. No call audio was recorded."}
        ],
        "embedded_urls": base.get("embedded_urls", []),
        "recommendations": recommendations,
        "limitations": [
            "This analyzes only the text you supplied; it does not listen to or record live calls.",
            "Basic language patterns may miss scams or flag legitimate calls. Caller identity is not verified.",
            "The transcript is not saved by this prototype.",
        ],
    }
