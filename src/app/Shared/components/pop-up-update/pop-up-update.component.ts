import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {EmployeeService} from "../../../EmployeeService/employee.service";
import {Employee} from "../../../employee";

@Component({
  selector: 'app-pop-up-update',
  templateUrl: './pop-up-update.component.html',
  styleUrls: ['./pop-up-update.component.css']
})
export class PopUpUpdateComponent {
  @ViewChild("form") myform:NgForm;
  @Input() employee:Employee;
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

  updateEmployee(form:NgForm) {
    console.log(this.employee)
    this.employeeService.updateEmployee(this.employee).subscribe(
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
