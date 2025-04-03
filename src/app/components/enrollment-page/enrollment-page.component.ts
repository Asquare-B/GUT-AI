import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavHeaderComponent } from "../nav-header/nav-header.component";
import { PageFooterComponent } from "../page-footer/page-footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment-page',
  imports: [ReactiveFormsModule, NavHeaderComponent, PageFooterComponent, CommonModule],
  templateUrl: './enrollment-page.component.html',
  styleUrl: './enrollment-page.component.scss'
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

  constructor(private fb: FormBuilder) {
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
  

  onSubmit(): void {
    if (this.enrollmentForm.invalid) {
      this.enrollmentForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    
    // Here you would typically send the form data to your backend
    const formData = new FormData();
    
    // Add form values
    Object.keys(this.enrollmentForm.value).forEach(key => {
        formData.append(key, this.enrollmentForm.value[key]);
    });
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      console.log('Form submitted:', formData.entries.toString);
      this.isSubmitting = false;
      // You would typically navigate to a success page or show a success message here
    }, 2000);
  }
}