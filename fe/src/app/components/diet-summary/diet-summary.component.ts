import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AnalysisService } from '../../services/analysis.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-diet-summary',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './diet-summary.component.html',
  styleUrl: './diet-summary.component.scss',
  providers: [HttpClient, AnalysisService]
})
export class DietSummaryComponent{
  @Input() formattedResults: any;

  constructor(private router: Router, private analysisService: AnalysisService) {
  }
}