import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleEmployeeComponent } from './Employee/components/single-employee/single-employee.component';
import { HeaderComponent } from './Shared/components/header/header.component';
import { AllEmployeesComponent } from './Employee/components/all-employees/all-employees.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PopUpComponent } from './shared/components/pop-up/pop-up.component';
import {FormsModule} from "@angular/forms";
import { DeletePopupComponent } from './Employee/components/delete-popup/delete-popup.component';
import { PopUpUpdateComponent } from './Shared/components/pop-up-update/pop-up-update.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleEmployeeComponent,
    HeaderComponent,
    AllEmployeesComponent,
    PopUpComponent,
    DeletePopupComponent,
    PopUpUpdateComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
