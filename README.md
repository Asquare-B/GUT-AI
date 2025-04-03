# GUT-AI: Digestive Health Prediction System
## 🌟 Features

- **Health Prediction**: ML model (Decision Tree) analyzes 14 health parameters
- **AI Analysis**: Gemini integration for personalized recommendations
- **Diet Plans**: Custom meal routines based on user profile
- **Risk Alerts**: Early warning sign identification
- **Hydration Guide**: Personalized water intake schedule

## 🛠 Tech Stack

```text
Backend: FastAPI
ML: Scikit-learn, Pandas
AI: Google Generative AI (Gemini)
Data: Label Encoded CSV
```
🚀 Quick Start

    Clone & Setup

bash
Copy

git clone https://github.com/yourusername/gut-ai.git
cd gut-ai
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
.venv\Scripts\activate  # Windows

    Install Dependencies

bash
Copy

pip install -r requirements.txt

    Configure Environment

bash
Copy

echo "GEMINI_API_KEY=your_api_key" > .env

    Run Server

bash
Copy

uvicorn app.main:app --reload
