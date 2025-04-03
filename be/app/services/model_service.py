# app/services/model_service.py
import joblib
import pandas as pd
from sklearn.tree import DecisionTreeClassifier

class ModelService:
    def __init__(self):
        self.model = None
        self.label_encoders = None
        self.target_variable = 'How often do you experience digestive discomfort (e.g., bloating, gas, indigestion)?'  # Added
        self.feature_order = [
            'What is your age group?',
            'What is your gender?',
            'How would you describe your typical diet?',
            'How often do you consume foods high in fiber (e.g., fruits, vegetables, rice)?',
            'Do you include fermented foods in your diet? (e.g., yogurt, buttermilk, lassi, etc)',
            'On average, how many liters of water do you consume per day?',
            'How often do you consume alcoholic beverages?',
            'Do you engage in regular physical exercise? (e.g., walking, running, workout)',
            'How would you describe your sleep patterns?',
            'How would you rate your stress levels on a daily basis?',
            'How often do you consume allopathic medicines?',
            'How often do you have a bowel movement (passing stool) in a typical week?',
            'How would you describe the consistency of your stool most of the time?'
        ]
        self.model_version = "1.0.0"
        self.load_model()

    def load_model(self):
        try:
            self.model = joblib.load('app/models/decision_tree_model.joblib')
            self.label_encoders = joblib.load('app/models/label_encoders.joblib')
        except Exception as e:
            raise RuntimeError(f"Error loading resources: {str(e)}")

    def preprocess_input(self, input_data: dict) -> pd.DataFrame:
        try:
            input_df = pd.DataFrame([input_data], columns=self.feature_order)
            
            for column in self.feature_order:
                le = self.label_encoders[column]
                input_df[column] = le.transform(input_df[column])
            
            return input_df
        except Exception as e:
            raise RuntimeError(f"Preprocessing error: {str(e)}")

    def predict(self, input_data: dict) -> dict:
        try:
            processed_df = self.preprocess_input(input_data)
            
            prediction = self.model.predict(processed_df)
            probabilities = self.model.predict_proba(processed_df)
            
            return {
                # Fixed: use self.target_variable
                "prediction": self.label_encoders[self.target_variable].inverse_transform(prediction)[0],
                "confidence": float(probabilities.max()),
                "model_version": self.model_version
            }
        except Exception as e:
            raise RuntimeError(f"Prediction error: {str(e)}")







model_service = ModelService()