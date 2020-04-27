import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {GameNums, LevelValues} from '../dictionary';


@Injectable({
  providedIn: 'root'
})
export class SharedStateService {


  private name = new BehaviorSubject('');
  sharedName$ = this.name.asObservable();

  private level = new BehaviorSubject(LevelValues.EASY_VAL);
  sharedLevel$ = this.level.asObservable();

  private clicks = new BehaviorSubject(GameNums.END_GAME);
  sharedClicks$ = this.clicks.asObservable();

  private url = new BehaviorSubject('');
  sharedUrl$ = this.url.asObservable();

  constructor() {
  }

  setName(name: string): void {
    this.name.next(name);
  }

  setLevel(level: number): void {
    this.level.next(level);
  }

  setClicks(clicks: number): void {
    this.clicks.next(clicks);
  }

  setUrl(url: string): void {
    this.url.next(url);
  }
}
