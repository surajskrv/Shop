from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import json
import joblib
import pandas as pd
from pydantic import BaseModel


app = FastAPI(title="MetalWorks API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Welcome to the MetalWorks API"}


@app.get("/api/projects")
def get_projects():
    projects_path = Path(__file__).resolve().parent / "projects.json"
    if not projects_path.exists():
        raise HTTPException(status_code=404, detail="projects.json not found")
    try:
        with projects_path.open("r", encoding="utf-8") as f:
            data = json.load(f)
    except json.JSONDecodeError as exc:
        raise HTTPException(status_code=500, detail="Invalid JSON in projects.json") from exc
    return data


class QuoteRequest(BaseModel):
    width_cm: float
    height_cm: float
    material: str
    complexity: float


_MODEL_PATH = Path(__file__).resolve().parent / "quote_model.pkl"
_MODEL_PIPELINE = None


def _get_model_pipeline():
    global _MODEL_PIPELINE
    if _MODEL_PIPELINE is None:
        if not _MODEL_PATH.exists():
            raise HTTPException(status_code=503, detail="Model not available. Train it first by running train_model.py")
        try:
            _MODEL_PIPELINE = joblib.load(_MODEL_PATH)
        except Exception as exc:
            raise HTTPException(status_code=500, detail="Failed to load model pipeline") from exc
    return _MODEL_PIPELINE


@app.post("/api/generate-quote")
def generate_quote(payload: QuoteRequest):
    model = _get_model_pipeline()
    try:
        try:
            payload_dict = payload.model_dump()  # Pydantic v2
        except AttributeError:
            payload_dict = payload.dict()  # Pydantic v1 fallback
        # Only allow iron and steel for now
        allowed_materials = {"iron", "steel"}
        if str(payload_dict.get("material", "")).lower() not in allowed_materials:
            raise HTTPException(status_code=400, detail="Invalid material. Allowed: iron, steel")
        features_df = pd.DataFrame([payload_dict])
        prediction = model.predict(features_df)
        estimated_price = float(prediction[0])
        return {"estimated_price": round(estimated_price, 2)}
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail="Failed to generate quote") from exc


# How to start the server:
# 1) Open a terminal and navigate to this 'backend' directory:
#    cd backend
# 2) Install dependencies:
#    pip install -r requirements.txt
# 3) Start the development server:
#    uvicorn main:app --reload --host 0.0.0.0 --port 8000


