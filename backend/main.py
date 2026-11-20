from datetime import datetime, timezone
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from .analyzers import analyze_call_transcript, analyze_message, analyze_url

ROOT = Path(__file__).resolve().parent.parent
app = FastAPI(title="TrustLens AI", version="0.1.0", description="Explainable link and message safety prototype")
app.mount("/static", StaticFiles(directory=ROOT / "frontend"), name="static")


class URLRequest(BaseModel):
    url: str = Field(min_length=1, max_length=4096)


class MessageRequest(BaseModel):
    text: str = Field(min_length=1, max_length=6000)


def stamp(report: dict) -> dict:
    report["analyzed_at"] = datetime.now(timezone.utc).isoformat()
    return report


@app.get("/")
def home():
    return FileResponse(ROOT / "frontend" / "index.html")


@app.get("/health")
def health():
    return {"status": "ok", "service": "trustlens-prototype"}


@app.post("/api/analyze/url")
def url_endpoint(request: URLRequest):
    try:
        return stamp(analyze_url(request.url))
    except ValueError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc


@app.post("/api/analyze/message")
def message_endpoint(request: MessageRequest):
    try:
        return stamp(analyze_message(request.text))
    except ValueError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc


@app.post("/api/analyze/call-transcript")
def call_transcript_endpoint(request: MessageRequest):
    try:
        return stamp(analyze_call_transcript(request.text))
    except ValueError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc
