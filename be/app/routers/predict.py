from fastapi import APIRouter, HTTPException
from app.schemas.prediction import GeminiAnalysisResponse, PredictionInput, PredictionResult
from app.services.model_service import model_service

from app.services.gemini_service import GeminiService

gemini_service = GeminiService()

router = APIRouter(tags=["predictions"])

@router.post("/predict", response_model=PredictionResult)
async def make_prediction(input_data: PredictionInput):
    try:
        # Convert to model input format
        model_input = input_data.to_model_input()
        prediction = model_service.predict(model_input)
        return prediction
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    

@router.post("/predict-with-analysis")
async def predict_with_analysis(input_data: PredictionInput):
    try:
        # Get model prediction
        model_input = input_data.to_model_input()
        prediction_dict = model_service.predict(model_input)
        
        # Convert to Pydantic model
        prediction_result = PredictionResult(**prediction_dict)
        
        # Get Gemini analysis
        analysis = gemini_service.generate_analysis(
            user_input=input_data.dict(),
            prediction=prediction_dict  # Use the raw dict here
        )
        print(analysis)
        return {
            "prediction": prediction_result,
            "analysis": analysis
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

