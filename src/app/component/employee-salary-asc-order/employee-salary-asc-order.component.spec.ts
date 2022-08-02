import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSalaryAscOrderComponent } from './employee-salary-asc-order.component';

describe('EmployeeSalaryAscOrderComponent', () => {
  let component: EmployeeSalaryAscOrderComponent;
  let fixture: ComponentFixture<EmployeeSalaryAscOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSalaryAscOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSalaryAscOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
