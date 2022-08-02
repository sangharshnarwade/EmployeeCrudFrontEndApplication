import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { DetailsEmployeeComponent } from './component/details-employee/details-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeSalaryAscOrderComponent } from './component/employee-salary-asc-order/employee-salary-asc-order.component';
import { EmployeeSalaryDescOrderComponent } from './component/employee-salary-desc-order/employee-salary-desc-order.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    DetailsEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeListComponent,
    EmployeeSalaryAscOrderComponent,
    EmployeeSalaryDescOrderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
