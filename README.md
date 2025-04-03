

---

# 🌿 GUT-AI: Digestive Health Prediction System  

## 🌟 Features  

- **Health Prediction** 🩺 – ML model (Decision Tree) analyzes 14 health parameters  
- **AI Analysis** 🤖 – Gemini integration for personalized recommendations  
- **Diet Plans** 🍽️ – Custom meal routines based on user profile  
- **Risk Alerts** ⚠️ – Early warning sign identification  
- **Hydration Guide** 💧 – Personalized water intake schedule  

---

## 🛠 Tech Stack  

```text
Backend: FastAPI  
ML: Scikit-learn, Pandas  
AI: Google Generative AI (Gemini)  
Data: Label Encoded CSV  
```

---

## 🚀 Quick Start  

### 1️⃣ Clone & Setup  

```bash
git clone https://github.com/yourusername/gut-ai.git
cd gut-ai
python -m venv .venv
```

#### Activate Virtual Environment  

**Linux/Mac:**  
```bash
source .venv/bin/activate
```  

**Windows:**  
```bash
.venv\Scripts\activate
```  

### 2️⃣ Install Dependencies  

```bash
pip install -r requirements.txt
```  

### 3️⃣ Configure Environment  

```bash
echo "GEMINI_API_KEY=your_api_key" > .env
```  

### 4️⃣ Run the Server  

```bash
uvicorn app.main:app --reload
```  

---
