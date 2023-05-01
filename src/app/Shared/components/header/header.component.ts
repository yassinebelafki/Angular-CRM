import {Component, EventEmitter, Output} from '@angular/core';
import {MainServiceService} from "../../services/main-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggled:boolean=false;

  search:string;
  @Output() searchEmiter=new EventEmitter<string>();
  constructor(private mainService:MainServiceService) {
  }
  toggleAdd(){
this.mainService.popupmanager(true);
}

  searchFired() {
    this.searchEmiter.emit(this.search);
  }
}
