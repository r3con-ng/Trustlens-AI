# TrustLens AI

**Pause. Check. Then decide.** TrustLens AI is a digital-safety prototype that helps people inspect suspicious links, messages, and call transcripts. It highlights potential warning signs, explains what it noticed, and suggests safer next steps in a simple, responsive interface.

> TrustLens provides guidance, not a verdict. A clean result does not prove that content or a caller is safe.

[Open the live demo](https://r3con-ng.github.io/Trustlens-AI/) · [Report an issue](https://github.com/r3con-ng/Trustlens-AI/issues)

## What it can do

- **Check links:** inspect URL structure for characteristics such as insecure HTTP, IP-address hosts, unusually long addresses, and sensitive-action wording. Submitted destinations are never opened.
- **Review messages:** look for common pressure tactics, account threats, credential requests, payment requests, and recruitment-fee patterns. Links in the text are inspected locally.
- **Review call transcripts:** look for patterns associated with impersonation, threats, secrecy, remote-access requests, and “safe account” transfers. TrustLens does not listen to or record calls.
- **Understand the result:** see the signals found, checks performed, limitations, and practical recommendations.
- **Use it comfortably:** responsive layout, English and Hindi interface, and light, dark, or system theme options.

## Live demo

The frontend is published with GitHub Pages: **[r3con-ng.github.io/Trustlens-AI](https://r3con-ng.github.io/Trustlens-AI/)**.

GitHub Pages hosts static files, so the live demo runs a lightweight rule set in the browser. It does not use the FastAPI service or any external URL-reputation provider. The text entered in the Pages demo is analyzed in the browser and is not sent to a TrustLens backend.

## Run locally

The local application uses Python, FastAPI, and the frontend in this repository. Python 3.10 or newer is recommended.

```bash
python -m venv .venv
```

Activate the environment and install dependencies:

```bash
# macOS / Linux
source .venv/bin/activate

# Windows PowerShell
# .venv\Scripts\Activate.ps1

python -m pip install -r requirements.txt
```

Start the development server:

```bash
python -m uvicorn backend.main:app --reload
```

Then open [http://127.0.0.1:8000](http://127.0.0.1:8000). The interactive API documentation is available at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

## API

The local FastAPI service exposes these endpoints:

| Method | Endpoint | Request body |
| --- | --- | --- |
| `GET` | `/health` | — |
| `POST` | `/api/analyze/url` | `{ "url": "https://example.com" }` |
| `POST` | `/api/analyze/message` | `{ "text": "Paste a message" }` |
| `POST` | `/api/analyze/call-transcript` | `{ "text": "Paste call notes or transcript" }` |

Example:

```bash
curl -X POST http://127.0.0.1:8000/api/analyze/message \
  -H 'Content-Type: application/json' \
  -d '{"text":"Your account will be suspended. Share your OTP now."}'
```

## How it works

```text
Browser interface
  ├─ GitHub Pages: static frontend + lightweight browser-side checks
  └─ Local development: frontend → FastAPI → Python rule-based analyzers
                                      └─ URL parsing stays local; destinations are not fetched
```

The backend returns a structured report containing an assessment, indicators, completed checks, recommendations, and limitations. The current analyzer uses explainable patterns and URL parsing; it does not use a trained machine-learning model or live threat-intelligence feeds.

## Project layout

```text
backend/
  analyzers.py          URL, message, and call-transcript checks
  main.py               FastAPI application and API routes
frontend/
  index.html            Application interface
  app.js                UI behavior, translations, and API integration
  static-analyzer.js    Browser-side checks for the Pages demo
  styles.css            Responsive themes and layout
  favicon.svg           TrustLens icon
.github/workflows/
  pages.yml             GitHub Pages deployment workflow
requirements.txt        Python dependencies
```

## Privacy and safe use

- Link checks parse the submitted address; they do not visit the destination.
- The local prototype does not persist submitted text. The Pages demo performs its checks in the browser.
- Do not enter passwords, OTPs, PINs, financial details, identity documents, or other sensitive personal information.
- Treat assessments as advisory. Verify unexpected requests using contact details from an official source you find independently.
- If a call involves threats or pressure to transfer money, end the call and contact the organization or relevant authorities through verified channels.

## Current limitations

- Rule-based checks can miss scams and can flag legitimate content.
- Hindi coverage is limited; Hinglish and other Indian languages have not been comprehensively evaluated.
- The prototype does not verify a caller’s identity, analyze live call audio, or query an external URL-reputation service.
- The Pages demo and local backend use different analysis implementations, so their findings may differ.
- This project is a prototype, not a replacement for professional security tools or official reporting channels.

## Deployment

The `Deploy TrustLens to GitHub Pages` workflow publishes the contents of `frontend/` when frontend files or the workflow change on `main`. GitHub Pages must be configured to use **GitHub Actions** as its build and deployment source. The workflow run history is available in the repository’s [Actions tab](https://github.com/r3con-ng/Trustlens-AI/actions).

## Contributing

Contributions, bug reports, and suggestions are welcome. Please open an issue with a clear description of the problem or proposed improvement. For security-sensitive reports, avoid posting personal data or active malicious links in public issues.

## License

No license has been added yet. Until a license is included in the repository, all rights remain with the project owner.
