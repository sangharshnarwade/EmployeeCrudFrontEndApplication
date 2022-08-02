import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private baseUrl = 'http://localhost:8080/api/employee';
  constructor(private http : HttpClient) { }

 createEmployee(employee : Object) : Observable<Object> {
  return this.http.post(`${this.baseUrl}/new`,employee);
 }
 getEmployeeList() : Observable<any> {
  return this.http.get(`${this.baseUrl}/all`);
}
getEmployeeById(employeeId: String): Observable<any> {
  return this.http.get(`${this.baseUrl}/employeeId/${employeeId}`);
}

updateEmployee(employeeId : String, value : any) : Observable<Object> {
  return this.http.put(`${this.baseUrl}/update/${employeeId}`, value);
}
deleteEmployee(employeeId: String): Observable<any> {
  return this.http.delete(`${this.baseUrl}/delete/${employeeId}`, { responseType: 'text' });
}
getEmployeeSalaryByAscOrder() : Observable<any> {
  return this.http.get(`${this.baseUrl}/salary/asc`);
}
getEmployeeSalaryByDescOrder() : Observable<any> {
  return this.http.get(`${this.baseUrl}/salary/desc`);
}

}


