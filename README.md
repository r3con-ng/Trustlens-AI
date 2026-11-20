# TrustLens AI

A responsive web prototype that helps people review suspicious links, messages and call transcripts. It shows warning signals and practical next steps. It does not prove that something is safe or fraudulent.

## Features

- Analyze a URL locally without opening or fetching the destination.
- Analyze a message and inspect links embedded in it.
- Analyze pasted call notes or a transcript for common scam-call tactics. TrustLens does not listen to or record live calls.
- Read an explainable report with signals, checks, recommendations and limitations.
- Switch between English and Hindi, and Light, Dark or System theme.

## Run locally

Requires Python 3.10 or newer.

```bash
python -m venv .venv
source .venv/bin/activate       # Windows PowerShell: .venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m uvicorn backend.main:app --reload
```

Open <http://127.0.0.1:8000>. Interactive API documentation is at <http://127.0.0.1:8000/docs>.

## GitHub Pages demo

The frontend is deployed from the `frontend/` directory by GitHub Actions. After the Pages workflow succeeds, open <https://r3con-ng.github.io/Trustlens-AI/>. Pushes to `main` that change the frontend or Pages workflow trigger a new deployment.

GitHub Pages serves static files only. On the Pages site, checks run in your browser using a lightweight rule set; the FastAPI backend and external reputation checks are not deployed there. Local runs continue to use FastAPI. The workflow enables Pages for this repository and publishes through GitHub Actions.

## API

| Method | Path | Input |
|---|---|---|
| `GET` | `/health` | None |
| `POST` | `/api/analyze/url` | `{ "url": "https://example.com" }` |
| `POST` | `/api/analyze/message` | `{ "text": "Paste a message" }` |
| `POST` | `/api/analyze/call-transcript` | `{ "text": "Paste call notes or transcript" }` |

The analyzer only parses links locally; it never visits submitted URLs. The prototype does not save submitted messages or transcripts by design. Avoid entering passwords, OTPs, account details or identifying information.

## Limitations

Detection currently uses simple rules. It is not a trained or evaluated ML model, and it can miss scams or flag legitimate content. Hindi detection is limited and Hinglish is not validated. No external reputation provider is connected. Call analysis checks text supplied by the user; it does not verify the caller or access live call audio.

Treat results as advisory. **“No known issue found” does not mean safe.** Do not use this prototype as the sole basis for financial, identity or security decisions.

## Project structure

```text
backend/       FastAPI application and analyzers
frontend/      HTML, CSS, JavaScript and TrustLens favicon
requirements.txt
.env.example   Placeholder for future server-side configuration
```

## Commit future edits

```bash
git add .
git commit -m "Describe your change"
git push
```

Do not commit `.env`, API keys, virtual environments or private user content. `.gitignore` excludes common local files; review `git status` before pushing.
