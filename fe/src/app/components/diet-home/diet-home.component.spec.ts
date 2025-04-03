import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietHomeComponent } from './diet-home.component';

describe('DietHomeComponent', () => {
  let component: DietHomeComponent;
  let fixture: ComponentFixture<DietHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
