import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeId: String="";
  employee : Employee = new Employee();
  submitted = false;
  constructor(private route: ActivatedRoute,private router: Router, 
    private employeeService : EmployeeService ) { }

  ngOnInit(): void {
    this.employee = new Employee();

    this.employeeId = this.route.snapshot.params['employeeId'];
    this.employeeService.getEmployeeById(this.employeeId)
    .subscribe(data => {
      console.log(data)
      this.employee = data;
    }, error => console.log(error));
  }

  updateVaccineInventory() {
    this.employeeService.updateEmployee(this.employeeId, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoEmployeeList();
      }, error => console.log(error));
    }
    onSubmit() {
        this.submitted = true;
        this.updateVaccineInventory();   
        alert("Employee information Updated Successfully") 
      }
  
    
      gotoEmployeeList() {
        this.router.navigate(['/employee-list']);
      }
  }

