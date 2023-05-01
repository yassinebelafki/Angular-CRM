import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {EmployeeService} from "../../../EmployeeService/employee.service";
import {Employee} from "../../../employee";
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  @ViewChild("form") myform:NgForm;
  constructor(private employeeService:EmployeeService) {
  }
  addemployeePop:boolean=false;
  @Output() toggled=new EventEmitter<boolean>();
  closeAdd() {
    this.toggled.emit(false);
  }

  submitForm() {
    console.log(this.myform.name)
  }

  addNewEmployee(form:NgForm) {

  this.employeeService.addEmployee(form.value).subscribe(
    (res)=>{
      this.employeeService.emitChange.emit();
      this.closeAdd()
    },
    error => {
      console.log(error.message)
    }
  )
  }
}
