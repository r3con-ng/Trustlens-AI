const COPY = {
  en: {
    skip:"Skip to content",nav_check:"Check content",nav_how:"How it works",language:"Language",theme:"Theme",system:"System",light:"Light",dark:"Dark",
    eyebrow:"A clearer way to check suspicious content",headline:"Pause. Check.<br /><em>Then decide.</em>",intro:"Understand suspicious links and messages before you act. TrustLens explains the warning signs in plain language.",start_check:"Start a check",
    section_check:"01 / QUICK CHECK",analyzer_title:"What would you like to check?",analyzer_subtitle:"Choose one. Your input is analyzed for this report and is not saved.",private:"Private by default",link_tab:"A link",message_tab:"A message",call_tab:"A call transcript",url_label:"Paste the link you want to check",message_label:"Paste the message you want to check",call_label:"Paste your notes or a call transcript",url_placeholder:"https://example.com/login",message_placeholder:"Paste the suspicious message here…",call_placeholder:"Paste what the caller said. Remove names, numbers and private details…",url_hint:"We check the address structure. We do not open the website.",message_hint:"We look for common pressure tactics and sensitive requests.",call_hint:"We analyze text only. TrustLens does not listen to or record calls.",try_example:"Try an example",analyze:"Analyze",analyzing:"Checking…",privacy_note:"Remove personal details. Never paste passwords, OTPs or private account details.",empty_error:"Please enter a link to check.",empty_message_error:"Please enter a message to check.",empty_call_error:"Please enter call notes or a transcript.",
    advisory_title:"A helpful second look",advisory_copy:"TrustLens points out signals and gives you safer next steps. It cannot prove that a link or message is safe.",checks_label:"WHAT WE LOOK FOR",check_one:"Link structure and unusual patterns",check_two:"Pressure, impersonation and sensitive requests",check_three:"Clear actions you can take next",section_report:"02 / YOUR REPORT",report_title:"Here’s what we found",assessment_potentially_suspicious:"Several warning signs",assessment_inconclusive:"Needs a closer look",assessment_no_known_issue_found:"No common warning signs found",summary_potentially_suspicious:"Several warning signals appeared. Review them carefully before responding or opening anything.",summary_inconclusive:"A few signals need context. This is not proof of fraud or safety.",summary_no_known_issue_found:"These checks did not find common warning signs. That does not guarantee this content is safe.",
    evidence:"Signals noticed",recommendations:"What you can do",checks:"Checks performed",limitations:"Important limitations",no_signals:"No common warning patterns were noticed by these checks.",completed:"Completed",not_configured:"Not connected",not_applicable:"Not applicable",failed:"Unavailable",timestamp:"Checked",link_indicator:"Link characteristic",urgency:"Pressure to act quickly",account_threat:"Account access threat",credential_request:"Password or one-time code mention",payment_request:"Payment mentioned",recruitment_fee:"Possible recruitment fee request",embedded_link:"Link included in message",embedded_urls:"Links found in this message",linked_url_none:"No structural warning signals found in this link.",linked_url_signals:"{count} structural signal(s) found",link_state_potentially_suspicious:"Needs caution",link_state_inconclusive:"Unclear",link_state_no_known_issue_found:"No common warning signs",embedded_link_detail:"Link address was checked locally. The website was not opened.",digital_arrest_claim:"A ‘digital arrest’ claim was mentioned",authority_impersonation_claim:"The caller claims to represent an authority",arrest_or_legal_threat:"Arrest or legal action was used as a threat",secrecy_pressure:"You were discouraged from seeking help or ending the call",remote_access_request:"Remote access, screen sharing or app installation was requested",secure_transfer_pressure:"You were asked to transfer money to a ‘safe’ account",video_call_pressure:"You were pressured to stay on video",unencrypted_connection:"The link uses HTTP rather than HTTPS.",ip_address_host:"The address uses a numeric IP instead of a domain name.",many_subdomains:"The address has several subdomain levels.",long_url:"The link is unusually long; this can be legitimate but deserves care.",internationalized_domain:"The domain uses an encoding that can make characters look similar.",sensitive_action_words:"The address includes words related to sensitive actions.",
    guide_no_password:"Never share an OTP, password, PIN or recovery code in response to a message.",guide_verify:"Verify requests using contact details from an official source you find independently.",guide_fee:"Do not pay a recruitment or registration fee until you verify the employer through independently found official channels.",guide_link:"Do not enter passwords, one-time codes or payment details unless you independently verify the site.",guide_official:"If this link claims to be from an organization, open its official app or type its known address yourself.",guide_call_verify:"End a pressured call and contact the organization using a number from its official website or app.",guide_no_remote:"Do not install a remote-access app or share your screen at a caller’s request.",guide_no_transfer:"Do not transfer money to a ‘safe’, ‘holding’ or ‘verification’ account because a caller asks you to.",
    check_local_link:"Link structure checked locally; the destination was not opened.",check_local_message:"Common message patterns checked locally.",check_call_transcript:"Local patterns checked on your text; no call audio was recorded.",check_embedded_links:"Links found in the message were checked locally; the websites were not opened.",check_no_embedded_links:"No links were found in this message.",check_reputation_missing:"An external reputation service is not connected.",limit_link_miss:"A link can still be harmful even when these checks find no warning.",limit_link_not_opened:"The destination was not visited and external reputation was not checked.",limit_message_rules:"These basic language patterns may miss scams or flag legitimate messages.",limit_not_saved:"The message is not saved by this prototype.",limit_call_text:"This analyzes only the text you supplied; it does not listen to or record live calls.",limit_call_rules:"Basic language patterns may miss scams or flag legitimate calls. Caller identity is not verified.",technical_details:"Technical details",footer_disclaimer:"An advisory tool, not a guarantee of safety.",
    step1_title:"Share what concerns you",step1_copy:"Paste a link or message. No account needed.",step2_title:"See the signals",step2_copy:"Review the specific patterns our checks noticed.",step3_title:"Choose your next step",step3_copy:"Use clear guidance to verify before you act.",section_how:"03 / SIMPLE BY DESIGN",how_title:"Clarity at every step.",error_generic:"We could not complete this check. Please try again.",time_format:"en-IN"
  },
  hi: {
    skip:"मुख्य सामग्री पर जाएँ",nav_check:"सामग्री जाँचें",nav_how:"यह कैसे काम करता है",language:"भाषा",theme:"थीम",system:"सिस्टम",light:"लाइट",dark:"डार्क",
    eyebrow:"संदिग्ध सामग्री जाँचने का आसान तरीका",headline:"रुकें। जाँचें।<br /><em>फिर निर्णय लें।</em>",intro:"किसी लिंक या संदेश पर कार्रवाई करने से पहले उसे समझें। TrustLens चेतावनी के संकेत सरल भाषा में बताता है।",start_check:"जाँच शुरू करें",
    section_check:"01 / त्वरित जाँच",analyzer_title:"आप क्या जाँचना चाहते हैं?",analyzer_subtitle:"एक विकल्प चुनें। आपकी सामग्री इस रिपोर्ट के लिए जाँची जाती है और सहेजी नहीं जाती।",private:"डिफ़ॉल्ट रूप से निजी",link_tab:"लिंक",message_tab:"संदेश",call_tab:"कॉल का टेक्स्ट",url_label:"जाँचने के लिए लिंक चिपकाएँ",message_label:"जाँचने के लिए संदेश चिपकाएँ",call_label:"कॉल के नोट्स या ट्रांसक्रिप्ट चिपकाएँ",url_placeholder:"https://example.com/login",message_placeholder:"संदिग्ध संदेश यहाँ चिपकाएँ…",call_placeholder:"कॉलर ने जो कहा वह लिखें। नाम, नंबर और निजी जानकारी हटा दें…",url_hint:"हम लिंक की संरचना जाँचते हैं। वेबसाइट नहीं खोलते।",message_hint:"हम दबाव बनाने वाली भाषा और संवेदनशील अनुरोध देखते हैं।",call_hint:"हम केवल टेक्स्ट जाँचते हैं। TrustLens कॉल नहीं सुनता और न रिकॉर्ड करता है।",try_example:"उदाहरण देखें",analyze:"जाँचें",analyzing:"जाँच हो रही है…",privacy_note:"निजी जानकारी हटाएँ। पासवर्ड, OTP या खाते का विवरण न चिपकाएँ।",empty_error:"जाँचने के लिए लिंक लिखें।",empty_message_error:"जाँचने के लिए संदेश लिखें।",empty_call_error:"कॉल के नोट्स या ट्रांसक्रिप्ट लिखें।",
    advisory_title:"एक और उपयोगी जाँच",advisory_copy:"TrustLens संकेत दिखाता है और सुरक्षित अगले कदम सुझाता है। यह साबित नहीं कर सकता कि कोई लिंक या संदेश सुरक्षित है।",checks_label:"हम क्या देखते हैं",check_one:"लिंक की संरचना और असामान्य पैटर्न",check_two:"जल्दबाज़ी, प्रतिरूपण और संवेदनशील अनुरोध",check_three:"आपके लिए स्पष्ट अगले कदम",section_report:"02 / आपकी रिपोर्ट",report_title:"जाँच में यह मिला",assessment_potentially_suspicious:"कई चेतावनी संकेत",assessment_inconclusive:"और ध्यान से जाँचें",assessment_no_known_issue_found:"आम चेतावनी संकेत नहीं मिले",summary_potentially_suspicious:"कई चेतावनी संकेत मिले। जवाब देने या कुछ खोलने से पहले ध्यान से जाँचें।",summary_inconclusive:"कुछ संकेतों को संदर्भ के साथ समझने की ज़रूरत है। यह धोखाधड़ी या सुरक्षा का प्रमाण नहीं है।",summary_no_known_issue_found:"इन जाँचों में आम चेतावनी संकेत नहीं मिले। इसका मतलब यह नहीं कि सामग्री सुरक्षित है।",
    evidence:"दिखे हुए संकेत",recommendations:"आप क्या कर सकते हैं",checks:"की गई जाँचें",limitations:"ज़रूरी सीमाएँ",no_signals:"इन जाँचों में आम चेतावनी पैटर्न नहीं दिखे।",completed:"पूरी हुई",not_configured:"कनेक्ट नहीं है",not_applicable:"लागू नहीं",failed:"उपलब्ध नहीं",timestamp:"जाँच का समय",link_indicator:"लिंक की विशेषता",urgency:"जल्दी कार्रवाई का दबाव",account_threat:"खाते तक पहुँच बंद करने की धमकी",credential_request:"पासवर्ड या एक बार इस्तेमाल होने वाले कोड का उल्लेख",payment_request:"भुगतान का उल्लेख",recruitment_fee:"नौकरी के लिए शुल्क का संभावित अनुरोध",embedded_link:"संदेश में लिंक है",embedded_urls:"इस संदेश में मिले लिंक",linked_url_none:"इस लिंक की संरचना में चेतावनी संकेत नहीं मिले।",linked_url_signals:"{count} संरचनात्मक संकेत मिले",link_state_potentially_suspicious:"सावधानी ज़रूरी",link_state_inconclusive:"स्पष्ट नहीं",link_state_no_known_issue_found:"आम चेतावनी संकेत नहीं",embedded_link_detail:"लिंक का पता स्थानीय रूप से जाँचा गया। वेबसाइट नहीं खोली गई।",digital_arrest_claim:"‘डिजिटल अरेस्ट’ का दावा किया गया",authority_impersonation_claim:"कॉलर ने अधिकारी होने का दावा किया",arrest_or_legal_threat:"गिरफ्तारी या कानूनी कार्रवाई की धमकी",secrecy_pressure:"आपको मदद लेने या कॉल काटने से रोका गया",remote_access_request:"रिमोट एक्सेस, स्क्रीन शेयर या ऐप इंस्टॉल करने को कहा गया",secure_transfer_pressure:"‘सुरक्षित’ खाते में पैसे भेजने को कहा गया",video_call_pressure:"वीडियो कॉल पर बने रहने का दबाव",unencrypted_connection:"लिंक HTTPS के बजाय HTTP का उपयोग करता है।",ip_address_host:"पते में डोमेन के बजाय संख्यात्मक IP है।",many_subdomains:"पते में कई सबडोमेन स्तर हैं।",long_url:"लिंक असामान्य रूप से लंबा है; यह वैध भी हो सकता है, फिर भी सावधानी रखें।",internationalized_domain:"डोमेन में ऐसे अक्षर हो सकते हैं जो देखने में मिलते-जुलते हों।",sensitive_action_words:"पते में संवेदनशील कार्रवाई से जुड़े शब्द हैं।",
    guide_no_password:"किसी संदेश के जवाब में OTP, पासवर्ड, PIN या रिकवरी कोड साझा न करें।",guide_verify:"अनुरोध की पुष्टि स्वयं खोजे गए आधिकारिक संपर्क विवरण से करें।",guide_fee:"स्वतंत्र रूप से मिले आधिकारिक संपर्क से नियोक्ता की पुष्टि किए बिना नौकरी या पंजीकरण शुल्क न दें।",guide_link:"स्वतंत्र रूप से साइट की पुष्टि किए बिना पासवर्ड, OTP या भुगतान विवरण न डालें।",guide_official:"यदि लिंक किसी संस्था का होने का दावा करता है, तो उसका आधिकारिक ऐप खोलें या ज्ञात पता खुद टाइप करें।",guide_call_verify:"दबाव डालने वाली कॉल काटें और संस्था की आधिकारिक वेबसाइट या ऐप पर दिए नंबर से संपर्क करें।",guide_no_remote:"कॉलर के कहने पर रिमोट एक्सेस ऐप इंस्टॉल न करें और स्क्रीन साझा न करें।",guide_no_transfer:"कॉलर के कहने पर ‘सुरक्षित’ या ‘जाँच’ खाते में पैसे न भेजें।",
    check_local_link:"लिंक की संरचना स्थानीय रूप से जाँची; वेबसाइट नहीं खोली गई।",check_local_message:"संदेश के सामान्य पैटर्न स्थानीय रूप से जाँचे।",check_call_transcript:"आपके टेक्स्ट में स्थानीय पैटर्न जाँचे; कॉल रिकॉर्ड नहीं हुई।",check_embedded_links:"संदेश के लिंक स्थानीय रूप से जाँचे; वेबसाइटें नहीं खोली गईं।",check_no_embedded_links:"इस संदेश में कोई लिंक नहीं मिला।",check_reputation_missing:"बाहरी प्रतिष्ठा सेवा कनेक्ट नहीं है।",limit_link_miss:"इन जाँचों में चेतावनी न मिलने पर भी लिंक हानिकारक हो सकता है।",limit_link_not_opened:"वेबसाइट नहीं खोली गई और बाहरी प्रतिष्ठा नहीं जाँची गई।",limit_message_rules:"ये बुनियादी भाषा पैटर्न धोखाधड़ी चूक सकते हैं या सही संदेश को चिह्नित कर सकते हैं।",limit_not_saved:"यह प्रोटोटाइप संदेश सहेजता नहीं है।",limit_call_text:"यह केवल आपके दिए टेक्स्ट की जाँच करता है; लाइव कॉल नहीं सुनता या रिकॉर्ड करता।",limit_call_rules:"बुनियादी भाषा पैटर्न धोखाधड़ी चूक सकते हैं या सही कॉल को चिह्नित कर सकते हैं। कॉलर की पहचान सत्यापित नहीं होती।",technical_details:"तकनीकी विवरण",footer_disclaimer:"यह सलाह देने वाला टूल है, सुरक्षा की गारंटी नहीं।",
    step1_title:"चिंता वाली सामग्री साझा करें",step1_copy:"लिंक या संदेश चिपकाएँ। खाता आवश्यक नहीं।",step2_title:"संकेत देखें",step2_copy:"जाँच में मिले खास पैटर्न देखें।",step3_title:"अगला कदम चुनें",step3_copy:"कार्रवाई से पहले पुष्टि करने के लिए मार्गदर्शन लें।",section_how:"03 / सरलता के लिए बना",how_title:"हर कदम पर स्पष्टता।",error_generic:"जाँच पूरी नहीं हो सकी। कृपया फिर प्रयास करें।",time_format:"hi-IN"
  }
};

const $ = (selector) => document.querySelector(selector);
const form = $("#analysisForm");
const input = $("#analysisInput");
const inputLabel = $("#inputLabel");
const inputHint = $("#inputHint");
const formError = $("#formError");
const analyzeButton = $("#analyzeButton");
const resultSection = $("#resultSection");
let mode = "url";
let locale = localStorage.getItem("trustlens-language") || "en";
let theme = localStorage.getItem("trustlens-theme") || "system";
const languageSelect = $("#languageSelect");
const themeSelect = $("#themeSelect");
languageSelect.value = locale;
themeSelect.value = theme;
document.documentElement.dataset.theme = theme;

function t(key) { return COPY[locale][key] || COPY.en[key] || key; }
function applyLocale() {
  document.documentElement.lang = locale;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (value.includes("<em>")) node.innerHTML = value;
    else node.textContent = value;
  });
  document.querySelectorAll("[data-placeholder]").forEach((node) => { node.placeholder = t(node.dataset.placeholder); });
  languageSelect.setAttribute("aria-label", t("language"));
  themeSelect.setAttribute("aria-label", t("theme"));
  refreshModeText();
  if (!formError.hidden && formError.dataset.key) formError.textContent = t(formError.dataset.key);
}
function refreshModeText() {
  const urlMode = mode === "url";
  const modeKey = urlMode ? "url" : mode === "call" ? "call" : "message";
  inputLabel.textContent = t(`${modeKey}_label`);
  inputHint.textContent = t(`${modeKey}_hint`);
  input.placeholder = t(`${modeKey}_placeholder`);
  input.maxLength = urlMode ? 2048 : 5000;
  $("#charCount").textContent = `${input.value.length}/${input.maxLength}`;
}
function setMode(nextMode) {
  mode = nextMode;
  document.querySelectorAll(".mode-tab").forEach((tab) => {
    const active = tab.dataset.mode === mode;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.setAttribute("tabindex", active ? "0" : "-1");
  });
  input.value = "";
  hideError();
  refreshModeText();
  input.focus();
}
function hideError() { formError.hidden = true; formError.textContent = ""; formError.dataset.key = ""; }
function showError(key) { formError.hidden = false; formError.dataset.key = key; formError.textContent = t(key); }
function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function assessmentSummary(assessment) {
  return {
    potentially_suspicious: "summary_potentially_suspicious",
    inconclusive: "summary_inconclusive",
    no_known_issue_found: "summary_no_known_issue_found"
  }[assessment] || "summary_inconclusive";
}
function translateIndicator(indicator) {
  const key = indicator.name;
  if (key === "embedded_link") return t("embedded_link_detail");
  if (locale === "hi" && ["urgency", "account_threat", "credential_request", "payment_request", "recruitment_fee", "embedded_link"].includes(key)) return t(key);
  if (locale === "hi" && ["unencrypted_connection", "ip_address_host", "many_subdomains", "long_url", "internationalized_domain", "sensitive_action_words"].includes(key)) return t(key);
  if (["digital_arrest_claim", "authority_impersonation_claim", "arrest_or_legal_threat", "secrecy_pressure", "remote_access_request", "secure_transfer_pressure", "video_call_pressure"].includes(key)) return t(key);
  return indicator.evidence;
}
function translateRecommendation(text) {
  const patterns = [
    [/Never share an OTP/, "guide_no_password"],
    [/Verify requests using contact/, "guide_verify"],
    [/Do not pay a recruitment/, "guide_fee"],
    [/Do not enter passwords/, "guide_link"],
    [/If this link claims/, "guide_official"],
    [/If you feel pressured/, "guide_call_verify"],
    [/Do not install a remote-access/, "guide_no_remote"],
    [/Do not transfer money to a/, "guide_no_transfer"]
  ];
  for (const [pattern, key] of patterns) if (pattern.test(text)) return t(key);
  return text;
}
function translateCheck(check) {
  if (check.name === "link_structure") return t("check_local_link");
  if (check.name === "message_patterns") return t("check_local_message");
  if (check.name === "call_transcript_patterns") return t("check_call_transcript");
  if (check.name === "embedded_url_structure") return check.status === "completed" ? t("check_embedded_links") : t("check_no_embedded_links");
  if (check.name === "reputation") return t("check_reputation_missing");
  return check.detail;
}
function translateLimit(text) {
  if (/link can still be harmful/i.test(text)) return t("limit_link_miss");
  if (/destination was not visited/i.test(text)) return t("limit_link_not_opened");
  if (/only the text you supplied/i.test(text)) return t("limit_call_text");
  if (/caller identity is not verified/i.test(text)) return t("limit_call_rules");
  if (/not saved/i.test(text)) return t("limit_not_saved");
  if (/basic prototype|language patterns/i.test(text)) return t("limit_message_rules");
  return text;
}
function renderReport(report) {
  const card = $("#reportCard");
  card.replaceChildren();
  const assessment = report.assessment || "inconclusive";
  const summary = node("div", "report-summary");
  summary.append(node("span", `assessment-mark ${assessment}`, assessment === "potentially_suspicious" ? "!" : assessment === "inconclusive" ? "?" : "✓"));
  const titleWrap = node("div");
  const title = node("div", `assessment-label ${assessment}`, t(`assessment_${assessment}`));
  titleWrap.append(title, node("p", "", t(assessmentSummary(assessment))));
  summary.append(titleWrap);
  card.append(summary);

  const body = node("div", "report-body");
  const evidenceCol = node("section", "report-column");
  evidenceCol.append(node("h3", "report-subhead", t("evidence")));
  if (report.indicators?.length) {
    const list = node("ul", "signal-list");
    report.indicators.forEach((item) => list.append(node("li", "", translateIndicator(item))));
    evidenceCol.append(list);
  } else evidenceCol.append(node("p", "empty-signals", t("no_signals")));
  if (report.embedded_urls?.length) {
    evidenceCol.append(node("h3", "report-subhead", t("embedded_urls")));
    const urlList = node("ul", "embedded-url-list");
    report.embedded_urls.forEach((item) => {
      const entry = node("li", "embedded-url-item");
      entry.append(node("code", "", item.display_host));
      const state = item.indicator_count ? t("linked_url_signals").replace("{count}", item.indicator_count) : t("linked_url_none");
      entry.append(node("span", `linked-url-state ${item.assessment}`, state));
      urlList.append(entry);
    });
    evidenceCol.append(urlList);
  }
  evidenceCol.append(node("h3", "report-subhead", t("recommendations")));
  const recommendations = node("ul", "recommendation-list");
  (report.recommendations || []).forEach((item) => recommendations.append(node("li", "", translateRecommendation(item))));
  evidenceCol.append(recommendations);

  const checksCol = node("section", "report-column");
  checksCol.append(node("h3", "report-subhead", t("checks")));
  const checkList = node("ul", "check-list");
  (report.checks || []).forEach((item) => {
    const row = node("li");
    row.append(node("span", "", translateCheck(item)));
    row.append(node("span", "", t(item.status === "completed" ? "completed" : item.status === "not_configured" ? "not_configured" : "failed")));
    checkList.append(row);
  });
  checksCol.append(checkList);
  body.append(evidenceCol, checksCol);
  card.append(body);

  const limits = node("div", "limitations");
  limits.append(node("strong", "", t("limitations")));
  const limitList = node("ul");
  (report.limitations || []).forEach((item) => limitList.append(node("li", "", translateLimit(item))));
  limits.append(limitList);
  const details = node("details", "technical-details");
  details.append(node("summary", "", t("technical_details")));
  details.append(node("p", "technical-copy", report.summary || ""));
  limits.append(details);
  card.append(limits);

  const date = report.analyzed_at ? new Date(report.analyzed_at) : new Date();
  $("#reportTime").textContent = `${t("timestamp")} · ${new Intl.DateTimeFormat(t("time_format"), { dateStyle: "medium", timeStyle: "short" }).format(date)}`;
  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
}

document.querySelectorAll(".mode-tab").forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mode)));
input.addEventListener("input", () => { $("#charCount").textContent = `${input.value.length}/${input.maxLength}`; hideError(); });
$("#exampleButton").addEventListener("click", () => {
  input.value = mode === "url"
    ? "https://secure-account-verify.example/login"
    : mode === "call"
      ? "Caller: We are from the police cyber cell. A case has been registered against your number. Keep this call secret, turn on your camera, install AnyDesk and transfer your money to a safe account for verification."
      : "Your account will be suspended today. Verify your details now and share the OTP to keep access.";
  $("#charCount").textContent = `${input.value.length}/${input.maxLength}`;
  hideError();
  input.focus();
});
languageSelect.addEventListener("change", () => { locale = languageSelect.value; localStorage.setItem("trustlens-language", locale); applyLocale(); });
themeSelect.addEventListener("change", () => { theme = themeSelect.value; localStorage.setItem("trustlens-theme", theme); document.documentElement.dataset.theme = theme; });
document.querySelectorAll("[data-i18n]").forEach((el) => { if (el.dataset.i18n === "headline") el.innerHTML = COPY.en.headline; });
applyLocale();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) { showError(mode === "url" ? "empty_error" : mode === "call" ? "empty_call_error" : "empty_message_error"); input.focus(); return; }
  hideError();
  analyzeButton.disabled = true;
  analyzeButton.querySelector("span:first-child").textContent = t("analyzing");
  try {
    const endpoint = mode === "url" ? "/api/analyze/url" : mode === "call" ? "/api/analyze/call-transcript" : "/api/analyze/message";
    const payload = mode === "url" ? { url: value } : { text: value };
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const data = await response.json();
    if (!response.ok) {
      const detail = typeof data.detail === "string" ? data.detail : "";
      if (detail && locale === "en") { showError("error_generic"); formError.textContent = detail; }
      else showError("error_generic");
      return;
    }
    renderReport(data);
  } catch {
    showError("error_generic");
  } finally {
    analyzeButton.disabled = false;
    analyzeButton.querySelector("span:first-child").textContent = t("analyze");
  }
});
