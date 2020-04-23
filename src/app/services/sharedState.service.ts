import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {

  private name = new BehaviorSubject('');
  sharedName = this.name.asObservable();

  constructor() { }

  anotherName(name: string) {
    this.name.next(name);
  }
}
