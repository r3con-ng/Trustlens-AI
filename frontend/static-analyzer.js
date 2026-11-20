/* Lightweight browser-only checks used by the GitHub Pages demo. */
(() => {
  const rules = [
    ["urgency", /\b(urgent|immediately|right now|within \d+ minutes?|act now|तुरंत|अभी|जल्दी)\b/i, "The message pressures you to act quickly."],
    ["account_threat", /\b(suspend(?:ed)?|block(?:ed)?|terminate|expire|locked|बंद|निलंबित)\b/i, "The message threatens account access or service."],
    ["credential_request", /\b(password|passcode|otp|one[- ]time code|login details|pin|पासवर्ड|ओटीपी|पिन)\b/i, "The message mentions a password, one-time code or PIN."],
    ["payment_request", /\b(pay|payment|fee|deposit|transfer|upi|processing charge|registration charge|भुगतान|फीस)\b/i, "The message asks for or discusses a payment."],
    ["recruitment_fee", /\b(job|internship|offer letter|recruit(?:er|ment)|joining)\b.{0,70}\b(fee|deposit|payment|charge|registration)\b|\b(fee|deposit|payment|charge|registration)\b.{0,70}\b(job|internship|offer letter|recruit(?:er|ment)|joining)\b/i, "A job or internship message appears to connect an opportunity with a fee."],
    ["digital_arrest_claim", /digital arrest|डिजिटल\s*अरेस्ट|डिजिटल\s*गिरफ्तारी/i, "The caller appears to use a ‘digital arrest’ claim. Authorities do not establish guilt through a video call."],
    ["authority_impersonation_claim", /(?:we are|i am|calling from|speaking from).{0,35}\b(police|cbi|ed|customs|rbi|trai|do\s*t|cyber cell|narcotics|court)\b|\b(police|cbi|customs|cyber cell)\s+(?:officer|department)\b.{0,25}(?:speaking|calling|here)/i, "The caller claims to represent an authority. Verify independently using an official number."],
    ["arrest_or_legal_threat", /arrest warrant|you(?:'re| are) under arrest|case (?:has been )?registered|police (?:are )?coming|deport(?:ation)?|गिरफ्तार|वारंट|मुकदमा दर्ज|केस दर्ज/i, "The caller uses an arrest, legal-action or deportation threat to create pressure."],
    ["secrecy_pressure", /don't tell (?:anyone|your family|the bank)|keep (?:this|the call) secret|do not disconnect|stay on (?:the )?call|किसी को मत बत|परिवार को मत बत/i, "The caller appears to discourage you from seeking help or ending the call."],
    ["remote_access_request", /\b(anydesk|teamviewer|quick.?support|remote access|screen.?share|share your screen|install this app)\b|स्क्रीन शेयर|रिमोट एक्सेस/i, "The caller mentions remote access, screen sharing or installing an app."],
    ["secure_transfer_pressure", /transfer (?:(?:the|your) )?(?:money|funds|amount) to (?:a )?(?:safe|secure|verification) account|move (?:your )?money to (?:a )?safe account|send money to verify|सुरक्षित खाते में (?:पैसे|राशि) (?:भेज|ट्रांसफर)/i, "The caller appears to pressure you to transfer money to a ‘safe’ or verification account."],
    ["video_call_pressure", /video call|turn on (?:your )?camera|keep (?:the )?camera on|वीडियो कॉल|कैमरा चालू/i, "The caller asks you to stay on video or turn on your camera; consider this alongside other signals."],
  ];
  const indicator = (name, evidence) => ({ name, evidence, source: "browser_local", strength: "contextual" });
  const assess = (signals) => signals.length >= 2 ? "potentially_suspicious" : signals.length ? "inconclusive" : "no_known_issue_found";

  function inspectUrl(raw) {
    const candidate = /^[a-z][a-z\d+.-]*:\/\//i.test(raw) ? raw : `https://${raw}`;
    let parsed;
    try { parsed = new URL(candidate); } catch { return null; }
    if (!["http:", "https:"].includes(parsed.protocol) || !parsed.hostname) return null;
    const signals = [];
    if (parsed.protocol === "http:") signals.push(indicator("unencrypted_connection", "This link uses HTTP rather than HTTPS."));
    if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(parsed.hostname) || parsed.hostname.includes(":")) signals.push(indicator("ip_address_host", "The link points to a numeric IP address instead of a domain name."));
    if (parsed.hostname.split(".").length >= 5) signals.push(indicator("many_subdomains", "The domain has several subdomain levels."));
    if (raw.length > 100) signals.push(indicator("long_url", "This link is unusually long. Long links can be legitimate, so check the destination carefully."));
    if (parsed.hostname.toLowerCase().includes("xn--")) signals.push(indicator("internationalized_domain", "The domain uses an internationalized encoding that can make characters look similar."));
    const words = ["login", "verify", "verification", "secure", "account", "update", "password", "payment", "claim", "offer"].filter((word) => `${parsed.hostname}${parsed.pathname}`.toLowerCase().includes(word));
    if (words.length) signals.push(indicator("sensitive_action_words", `The address includes terms related to sensitive actions: ${words.slice(0, 4).join(", ")}. Context matters; these words alone do not prove fraud.`));
    return { parsed, signals };
  }

  function linksIn(text) {
    const pattern = /(?:https?:\/\/|www\.)[^\s<>\[\]{}"']+|(?<![@/])\b(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:com|in|net|org|co|vip|info)(?:\/[^\s<>\[\]{}"']*)?/gi;
    return [...new Set([...text.matchAll(pattern)].map((match) => match[0].replace(/[.,;:!?\])}]+$/, "")).map((url) => /^www\./i.test(url) ? `https://${url}` : url))].slice(0, 5);
  }

  function analyze(mode, text) {
    const signals = [];
    const embedded = [];
    if (mode === "url") {
      const result = inspectUrl(text.trim());
      if (!result) throw new Error("invalid link");
      signals.push(...result.signals);
      const assessment = assess(signals);
      return {
        assessment,
        summary: "Browser-only structural checks ran. This cannot prove that a link is safe or fraudulent.",
        indicators: signals,
        checks: [{ name: "link_structure", status: "completed", detail: "The address was parsed in your browser; the destination was not opened." }, { name: "reputation", status: "not_configured", detail: "No external reputation provider is connected." }],
        recommendations: ["Do not enter passwords, one-time codes or payment details unless you independently verify the site.", "If this link claims to be from an organization, open its official app or type its known address yourself."],
        limitations: ["A link can be harmful even when these checks find no warning.", "These checks run in your browser. The destination is not visited and external reputation is not checked."],
        analyzed_at: new Date().toISOString(),
      };
    }

    for (const [name, pattern, evidence] of rules.slice(0, 5)) if (pattern.test(text)) signals.push(indicator(name, evidence));
    for (const link of linksIn(text)) {
      const result = inspectUrl(link);
      if (!result) continue;
      embedded.push({ display_host: result.parsed.hostname, assessment: assess(result.signals), indicator_count: result.signals.length });
      for (const signal of result.signals) signals.push({ ...signal, scope: "link_in_message", evidence: `A link in this message: ${signal.evidence}` });
    }
    if (embedded.length) signals.push(indicator("embedded_link", `The message contains ${embedded.length} link(s). Their addresses were checked locally; the sites were not opened.`));
    const callSignals = [];
    if (mode === "call") {
      for (const [name, pattern, evidence] of rules.slice(5)) if (pattern.test(text)) callSignals.push(indicator(name, evidence));
      signals.push(...callSignals);
    }
    const assessment = assess(signals);
    const recommendations = mode === "call"
      ? ["If you feel pressured, end the call and contact the organization using a number from its official website or app.", "Do not share OTPs, PINs, passwords, identity documents or payment details during an unexpected call."]
      : ["Never share an OTP, password, PIN or recovery code in response to a message.", "Verify requests using contact details from an official source you find independently."];
    if (callSignals.some((item) => item.name === "remote_access_request")) recommendations.unshift("Do not install a remote-access app or share your screen at a caller’s request.");
    if (callSignals.some((item) => item.name === "secure_transfer_pressure")) recommendations.unshift("Do not transfer money to a ‘safe’, ‘holding’ or ‘verification’ account because a caller asks you to.");
    return {
      assessment,
      summary: mode === "call" ? "Browser-only checks reviewed the transcript text. They cannot prove who called or whether a crime occurred." : "Browser-only checks reviewed the message. They cannot prove that it is safe or fraudulent.",
      indicators: signals,
      checks: [{ name: mode === "call" ? "call_transcript_patterns" : "message_patterns", status: "completed", detail: "Basic pattern checks ran in your browser; no text was uploaded." }, { name: "embedded_url_structure", status: embedded.length ? "completed" : "not_applicable", detail: embedded.length ? "Embedded link structure was analyzed locally; no destination was opened." : "No links were found in this message." }, { name: "reputation", status: "not_configured", detail: "No external reputation provider is connected." }],
      embedded_urls: embedded,
      recommendations,
      limitations: mode === "call" ? ["This checks only the text you supplied; it does not listen to or record live calls.", "Basic language patterns may miss scams or flag legitimate calls. Caller identity is not verified.", "These checks run in your browser and do not send the transcript to a server."] : ["Basic language patterns may miss scams or flag legitimate messages.", "These checks run in your browser and do not send the message to a server."],
      analyzed_at: new Date().toISOString(),
    };
  }

  window.trustlensStaticAnalyze = analyze;
})();
