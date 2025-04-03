from fastapi import FastAPI
from app.routers import predict, model_info
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Digestive Health Predictor",
             description="API for predicting digestive discomfort likelihood",
             version="1.0.0")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(predict.router)
# app.include_router(model_info.router)

@app.get("/health", tags=["health"])
async def health_check():
    return {"status": "healthy"}