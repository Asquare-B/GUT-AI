// enrollment-form.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-enrollment-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.scss']
})
export class EnrollmentFormComponent {
  enrollmentForm: FormGroup;
  isSubmitting = false;
  submissionSuccess = false;
  submissionError = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
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

  onSubmit() {
    if (this.enrollmentForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submissionSuccess = false;
      this.submissionError = false;

      console.info(this.enrollmentForm.value);
      // Replace with your actual API endpoint
      const apiUrl = 'https://your-api-endpoint.com/enroll';

      this.http.post(apiUrl, this.enrollmentForm.value)
        .subscribe({
          next: (response) => {
            this.isSubmitting = false;
            this.submissionSuccess = true;
            this.enrollmentForm.reset();
          },
          error: (error) => {
            console.error('Submission error:', error);
            this.isSubmitting = false;
            this.submissionError = true;
          }
        });
    } else {
      // Mark all fields as touched to show validation messages
      this.markFormGroupTouched(this.enrollmentForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}