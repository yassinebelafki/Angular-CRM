import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  private toggled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toggled$: Observable<boolean> = this.toggled.asObservable();
  constructor() { }

  popupmanager(toggle:boolean){
    this.toggled.next(toggle);
  }
}
