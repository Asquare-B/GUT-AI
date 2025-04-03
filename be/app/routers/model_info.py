from fastapi import APIRouter
from app.services.model_service import model_service

router = APIRouter(tags=["model info"])

@router.get("/model-info")
async def get_model_info():
    return {
        "model_type": "Decision Tree Classifier",
        "version": model_service.model_version,
        "features": list(model_service.model.feature_names_in_),
        "classes": model_service.model.classes_.tolist()
    }