import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { DetailsEmployeeComponent } from './component/details-employee/details-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeSalaryAscOrderComponent } from './component/employee-salary-asc-order/employee-salary-asc-order.component';
import { EmployeeSalaryDescOrderComponent } from './component/employee-salary-desc-order/employee-salary-desc-order.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';

const routes: Routes = [
  {path : '', redirectTo: 'employee-list',pathMatch: 'full'},
  {path : 'new-employee', component : CreateEmployeeComponent},
  {path : 'employee-list', component : EmployeeListComponent},
  {path : 'update/:employeeId', component : UpdateEmployeeComponent},
  {path : 'details/:employeeId', component : DetailsEmployeeComponent},
  {path : 'employee-salary-asc', component : EmployeeSalaryAscOrderComponent},
  {path : 'employee-salary-desc', component : EmployeeSalaryDescOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
