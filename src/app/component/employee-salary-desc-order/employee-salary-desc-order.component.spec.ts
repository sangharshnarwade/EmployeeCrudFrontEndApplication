import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSalaryDescOrderComponent } from './employee-salary-desc-order.component';

describe('EmployeeSalaryDescOrderComponent', () => {
  let component: EmployeeSalaryDescOrderComponent;
  let fixture: ComponentFixture<EmployeeSalaryDescOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSalaryDescOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSalaryDescOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
