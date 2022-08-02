import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Observable<Employee[]>;
  constructor(private employeeService : EmployeeService, private router : Router){ }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
  this.employees = this.employeeService.getEmployeeList();
  }
  deleteEmployee(employeeId: String) {
    this.employeeService.deleteEmployee(employeeId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEmployee(employeeId: String) {
    this.router.navigate(['/update', employeeId]);
  }

  employeeDetails(employeeId: String){
    this.router.navigate(['/details', employeeId]);
  }

}