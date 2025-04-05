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
    You are a licensed doctor and nutritionist giving a one-on-one consultation. Based on the user's health profile, write a personalized wellness prescription that reads as if it's written by a human expert — professional, supportive, and to the point.

    Do **not** mention any predictions, analysis, AI, or models.

    Respond in **Markdown format** using clear, user-friendly language. Structure the output like a direct message to the user.

    User Profile:
    {self._format_dict(user_input)}

    Use this structure for your response:

    ---

    **Health Insight**  
    A short, reassuring explanation of their gut health.

    **Lifestyle Recommendations**  
    Three personalized lifestyle changes the user should implement immediately.

    **Warning Signs to Watch For**  
    When should the user seek professional medical advice? Be clear but not alarming.

    **Sample Daily Diet Plan**  
    Include:
    - Breakfast ideas
    - Lunch options
    - Healthy snacks
    - Dinner suggestions
    - Recommended portion sizes
    - Preferred cooking methods

    **Hydration Guide**  
    Offer a realistic water intake schedule.

    ---

    Make it feel like a real health consultation from a professional who cares. Be warm but avoid fluff. Start your message with a personal line like:

    > "Based on your health and lifestyle, here’s what I recommend for you."

    Only include what’s essential for the user's well-being.
        """.strip()



    def _format_dict(self, data: dict):
        return "\n".join([f"- {k}: {v}" for k, v in data.items()])