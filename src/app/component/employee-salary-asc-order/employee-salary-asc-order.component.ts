import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-salary-asc-order',
  templateUrl: './employee-salary-asc-order.component.html',
  styleUrls: ['./employee-salary-asc-order.component.css']
})
export class EmployeeSalaryAscOrderComponent implements OnInit {
  employees!: Observable<Employee[]>;
  constructor(private employeeService : EmployeeService, private router : Router) { }

  ngOnInit(): void {
   this.getEmployeeSalaryAscOrder();
  }
  getEmployeeSalaryAscOrder() {
    this.employees = this.employeeService.getEmployeeSalaryByAscOrder();
  }
}
