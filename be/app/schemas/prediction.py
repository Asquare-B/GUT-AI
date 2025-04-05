from enum import Enum
from pydantic import BaseModel, Field
from datetime import datetime

class AgeGroup(str, Enum):
    group_6_18 = "6 - 18 years"
    group_19_35 = "19 - 35 years"
    group_36_55 = "36 - 55 years"
    group_55_plus = "55+ years"

class Gender(str, Enum):
    male = "Male"
    female = "Female"

class TypicalDiet(str, Enum):
    whole_foods = "Mostly whole foods (fruits, vegetables, whole grains)"
    mixed = "A mix of whole foods and processed foods"
    processed = "Mostly processed and fast foods"

class FiberConsumption(str, Enum):
    daily = "Daily"
    two_three_week = "2-3 times a week"
    rarely = "Rarely or never"

class FermentedFoods(str, Enum):
    regularly = "Yes, regularly"
    occasionally = "Occasionally (min once a week)"
    never = "No, never"

class WaterConsumption(str, Enum):
    four_or_more = "4 or more"
    one_to_three = "1 to 3"
    one_or_less = "1 or less"

class AlcoholConsumption(str, Enum):
    rarely = "Rarely or never"
    occasionally = "Occasionally (1-2 times a week)"
    regularly = "Regularly (3 or more times a week)"

class ExerciseFrequency(str, Enum):
    multiple = "Yes, multiple times a week"
    occasionally = "Occasionally"
    rarely = "No, rarely or never"

class SleepPatterns(str, Enum):
    regular = "My sleep patterns are set and regular"
    varied = "My sleep patterns vary"

class StressLevels(str, Enum):
    low = "Low"
    moderate = "Moderate"
    high = "High"

class MedicineConsumption(str, Enum):
    rarely = "Rarely or never"
    occasionally = "Occasionally (Once in 2 months)"
    frequently = "Frequently (Once in a month)"

class BowelMovement(str, Enum):
    daily = "Once a day"
    three_four_week = "3-4 times a week"  # Updated value
    less_than_two = "Less than 2 times a week"

class StoolConsistency(str, Enum):
    soft = "Soft, well-formed, and easy to pass"
    loose = "Loose or watery, lacking form"
    hard = "Hard, pellet-like, or difficult to pass"


class PredictionInput(BaseModel):
    age_group: AgeGroup
    gender: Gender
    typical_diet: TypicalDiet
    fiber_consumption: FiberConsumption
    fermented_foods: FermentedFoods
    water_consumption: WaterConsumption
    alcohol_consumption: AlcoholConsumption
    physical_exercise: ExerciseFrequency
    sleep_patterns: SleepPatterns
    stress_levels: StressLevels
    medicine_consumption: MedicineConsumption
    bowel_movement_frequency: BowelMovement
    stool_consistency: StoolConsistency

    def to_model_input(self):
        return {
            'What is your age group?': self.age_group.value,
            'What is your gender?': self.gender.value,
            'How would you describe your typical diet?': self.typical_diet.value,
            'How often do you consume foods high in fiber (e.g., fruits, vegetables, rice)?': self.fiber_consumption.value,
            'Do you include fermented foods in your diet? (e.g., yogurt, buttermilk, lassi, etc)': self.fermented_foods.value,
            'On average, how many liters of water do you consume per day?': self.water_consumption.value,
            'How often do you consume alcoholic beverages?': self.alcohol_consumption.value,
            'Do you engage in regular physical exercise? (e.g., walking, running, workout)': self.physical_exercise.value,
            'How would you describe your sleep patterns?': self.sleep_patterns.value,
            'How would you rate your stress levels on a daily basis?': self.stress_levels.value,
            'How often do you consume allopathic medicines?': self.medicine_consumption.value,
            'How often do you have a bowel movement (passing stool) in a typical week?': self.bowel_movement_frequency.value,
            'How would you describe the consistency of your stool most of the time?': self.stool_consistency.value
        }

class PredictionResult(BaseModel):
    prediction: str
    confidence: float
    model_version: str


class GeminiAnalysisResponse(BaseModel):
    prediction: PredictionResult
    analysis: dict = Field(..., example={
        "explanation": "Simple explanation...",
        "lifestyle_changes": ["Change 1", "Change 2", "Change 3"],
        "warnings": ["Warning sign 1", "Warning sign 2"],
        "diet_plan": {
            "breakfast": "Oatmeal with...",
            "lunch": "Grilled chicken...",
            "snacks": ["Apple with nuts", "Yogurt"],
            "dinner": "Steamed fish with..."
        },
        "hydration": "2 liters daily, timing recommendations..."
    })
    analysis_timestamp: datetime