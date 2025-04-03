import os
from google import genai
from fastapi import HTTPException
from dotenv import load_dotenv
load_dotenv()

class GeminiService:
    def __init__(self):
        self.client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

    def generate_analysis(self, user_input: dict, prediction: dict):
        try:
            prompt = self._build_prompt(user_input, prediction)

            response = self.client.models.generate_content(
                model="gemini-2.0-flash", contents=prompt
            )
            return response.text
        except Exception as e:
            raise HTTPException(
                status_code=500, detail=f"Gemini API error: {str(e)}"
            )

 

    def _build_prompt(self, user_input: dict, prediction: dict):
        return f"""
        Analyze this health data and provide comprehensive recommendations:
        
        User Profile:
        {self._format_dict(user_input)}
        
        Prediction: {prediction['prediction']} (Confidence: {prediction['confidence']*100:.1f}%)
        
        Provide detailed recommendations in this structure:
        1. Explanation: Simple analysis of the prediction
        2. Lifestyle Changes: 3 actionable steps for better gut health
        3. Warning Signs: When to consult a doctor
        4. Diet Plan: A daily diet routine including:
        - Breakfast ideas 
        - Lunch options
        - Healthy snacks
        - Dinner suggestions
        - Recommended portion sizes
        - Cooking methods
        5. Hydration Guide: Optimal water intake schedule
        
        Tailor recommendations based on:
        - Age group: {user_input['age_group']}
        - Current diet: {user_input['typical_diet']}
        - Activity level: {user_input['physical_exercise']}
        - Existing symptoms: {prediction['prediction']}
        """.strip()

    def _format_dict(self, data: dict):
        return "\n".join([f"- {k}: {v}" for k, v in data.items()])