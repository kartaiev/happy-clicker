import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {

  private name = new BehaviorSubject('');
  sharedName = this.name.asObservable();

  private level = new BehaviorSubject(10);
  sharedLevel = this.level.asObservable();

  constructor() { }

  getName(name: string) {
    this.name.next(name);
  }

  getLevel(level: number) {
    this.level.next(level);
  }
}
