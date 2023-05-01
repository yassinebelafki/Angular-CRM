import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeService} from "../../../EmployeeService/employee.service";
import {Employee} from "../../../employee";

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.css']
})
export class SingleEmployeeComponent {

@Input() employee:Employee;
@Output() emitDelete=new EventEmitter<boolean>();
  @Output() emitupdate=new EventEmitter<boolean>();

  deletepopup() {
    this.emitDelete.emit(true);
  }

  updatepopup() {
   this.emitupdate.emit(true);
  }
}
