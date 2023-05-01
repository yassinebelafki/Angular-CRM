import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Employee} from "../../../employee";
import {EmployeeService} from "../../../EmployeeService/employee.service";
import {MainServiceService} from "../../../Shared/services/main-service.service";
import {SchematicsAngularComponentStyle} from "@angular/cli/lib/config/workspace-schema";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit, OnChanges {
  employees: Employee[]
  Addtogled: boolean = false;
  deleted: boolean = false;
  idDeleteEmpl: number;

  employeeToUpdate: Employee;
  UpdateToggle: boolean = false;

  @Input() searchValue: string;

  constructor(private employeeService: EmployeeService,
              private mainService: MainServiceService) {
  }

  ngOnChanges(changes: SimpleChanges) {
        if (changes['searchValue']){
          this.SearchFuntion();
        }
    }
  ngOnInit() {
    console.log("ngpninit")
    this.mainService.toggled$
      .subscribe(toggled => this.Addtogled = toggled);
    this.getAllEmployees();
    this.employeeService.emitChange.subscribe(
      ()=>{
        console.log("it s fired")
        this.getAllEmployees()
      }
    )

  }

  getAllEmployees(){
    this.employeeService.getEmployees().subscribe(
      (res:Employee[])=>{
        this.employees=res;
      }
    )
  }

  closeAdd() {
      this.Addtogled=false;
  }

  toggleDelete(id) {
    this.deleted=true;
    this.idDeleteEmpl=id;
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.idDeleteEmpl).subscribe(
      res=>{
        this.getAllEmployees();
        this.deleted=false;
      }
    );

  }

  toggleUpdate(employeeUpdate:Employee) {
      this.employeeToUpdate=employeeUpdate;
      this.UpdateToggle=true;

  }

  closeUpdate() {
    this.UpdateToggle=false;
  }

  SearchFuntion() {
    console.log(this.searchValue)
    if (this.employees) {
      let res: Employee[] = [];
      for (const empl of this.employees) {
        if (empl.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1 ||
          empl.jobTitle.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1 ||
          empl.email.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1) {
          res.push(empl)
        }
      }
      if (res.length != 0 && this.searchValue){
        console.log("kkkkk")
        this.employees = res;
      } else {
        console.log("9lawi")
        this.getAllEmployees();
      }
    }
  }
}
