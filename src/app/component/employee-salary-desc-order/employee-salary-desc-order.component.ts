import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-salary-desc-order',
  templateUrl: './employee-salary-desc-order.component.html',
  styleUrls: ['./employee-salary-desc-order.component.css']
})
export class EmployeeSalaryDescOrderComponent implements OnInit {
employees! : Observable<Employee[]>;
  constructor(private employeeService : EmployeeService, private router : Router) { }

  ngOnInit(): void {
    this.getEmployeeSalaryDescOrder();
   }
   getEmployeeSalaryDescOrder() {
     this.employees = this.employeeService.getEmployeeSalaryByDescOrder();
   }

}
