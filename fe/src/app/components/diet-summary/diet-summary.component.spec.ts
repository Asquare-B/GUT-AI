import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietSummaryComponent } from './diet-summary.component';

describe('DietSummaryComponent', () => {
  let component: DietSummaryComponent;
  let fixture: ComponentFixture<DietSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
