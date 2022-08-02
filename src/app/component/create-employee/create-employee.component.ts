import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/Employee';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 employee : Employee = new Employee();
 submitted : boolean = false;
  constructor(private employeeServive : EmployeeService,private router : Router) { }

  ngOnInit(): void {
  }
  newEmployee(): void {
    this.submitted=false;
    this.employee= new Employee();
  }

  save() {
    this.employeeServive.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.employee = new Employee();
      this.gotoEmployeeList();
    },error => console.log(error));
  }
  onSubmit(createForm: { value: any }){
    this.submitted = true;
    this.save();
    alert("Employee Information Saved Successfully")
  }
  gotoEmployeeList() {
    return this.router.navigate(['/employee-list']);
  }
} 
