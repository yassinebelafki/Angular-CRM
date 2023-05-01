import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRM';

  tempSaerch:string;
  injectSearch(event: string) {
    this.tempSaerch=event;
  }
}
