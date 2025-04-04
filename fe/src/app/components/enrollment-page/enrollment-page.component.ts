import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClientModule
import { NavHeaderComponent } from "../nav-header/nav-header.component";
import { PageFooterComponent } from "../page-footer/page-footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment-page',
  standalone: true, 
  imports: [HttpClientModule, ReactiveFormsModule, NavHeaderComponent, PageFooterComponent, CommonModule], // ✅ Add HttpClientModule
  templateUrl: './enrollment-page.component.html',
  styleUrls: ['./enrollment-page.component.scss']
})
export class EnrollmentPageComponent implements OnInit {
  enrollmentForm: FormGroup;
  selectedFile: File | null = null;
  isSubmitting = false;
  
  dietaryPreferences = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten Free' },
    { value: 'dairy-free', label: 'Dairy Free' },
    { value: 'keto', label: 'Keto' },
    { value: 'low-fodmap', label: 'Low FODMAP' }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.enrollmentForm = this.fb.group({
      ageGroup: ['', Validators.required],
      gender: ['', Validators.required],
      dietType: ['', Validators.required],
      fiberConsumption: ['', Validators.required],
      fermentedFoods: ['', Validators.required],
      waterIntake: ['', Validators.required],
      alcoholConsumption: ['', Validators.required],
      exerciseFrequency: ['', Validators.required],
      sleepPatterns: ['', Validators.required],
      stressLevel: ['', Validators.required],
      medicineUsage: ['', Validators.required],
      digestiveIssues: ['', Validators.required],
      bowelMovement: ['', Validators.required],
      stoolConsistency: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] || null;
  }

  onSubmit(): void {
    if (this.enrollmentForm.invalid) {
      this.enrollmentForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;


    
    // Mapping form values to backend-expected keys
    const formValues = this.enrollmentForm.value;

    const payload = {
      age_group: formValues.ageGroup,
      gender: formValues.gender,
      typical_diet: formValues.dietType,
      fiber_consumption: formValues.fiberConsumption,
      fermented_foods: formValues.fermentedFoods,
      water_consumption: formValues.waterIntake,
      alcohol_consumption: formValues.alcoholConsumption,
      physical_exercise: formValues.exerciseFrequency,
      sleep_patterns: formValues.sleepPatterns,
      stress_levels: formValues.stressLevel,
      medicine_consumption: formValues.medicineUsage,
      bowel_movement_frequency: formValues.bowelMovement,
      stool_consistency: formValues.stoolConsistency
    };
    // const temp = {
    //   "age_group": "6 - 18 years",
    //   "gender": "Male",
    //   "typical_diet": "Mostly whole foods (fruits, vegetables, whole grains)",
    //   "fiber_consumption": "Daily",
    //   "fermented_foods": "Yes, regularly",
    //   "water_consumption": "4 or more",
    //   "alcohol_consumption": "Rarely or never",
    //   "physical_exercise": "Yes, multiple times a week",
    //   "sleep_patterns": "My sleep patterns are set and regular",
    //   "stress_levels": "Low",
    //   "medicine_consumption": "Rarely or never",
    //   "bowel_movement_frequency": "Once a day",
    //   "stool_consistency": "Soft, well-formed, and easy to pass"
    // };

    this.http.post('http://localhost:8000/predict-with-analysis', payload).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        alert('Enrollment Successful!');
        this.enrollmentForm.reset();
        this.selectedFile = null;
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
