import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../employee";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  emitChange:EventEmitter<any>=new EventEmitter<any>();
  constructor(private http:HttpClient) {
  }

  public getEmployees(){
    return this.http.get("http://localhost:8080/employees/all");
  }

  public addEmployee(employee:Employee){
    return  this.http.post("http://localhost:8080/employees/add",employee);
  }

  public updateEmployee(employee:Employee){
    return this.http.put("http://localhost:8080/employees/update",employee);
  }

  public deleteEmployee(employeeId:number){
    return this.http.delete("http://localhost:8080/employees/delete/"+employeeId);
  }

  public getSingleEmployee(emplyeeId:number){
    return this.http.get("http://localhost:8080/employees/get/"+emplyeeId);
  }
}
