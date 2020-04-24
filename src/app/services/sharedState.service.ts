import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  END_GAME = 0;
  STOP_COUNTDOWN = -5;
  STOP_CLICKS_COUNT = -1;
  DEFAULT_GAME_START = 10;
  NORMAL_GAME_START = 20;
  HARD_GAME_START = 30;

  private name = new BehaviorSubject('');
  sharedName = this.name.asObservable();

  private level = new BehaviorSubject(10);
  sharedLevel = this.level.asObservable();

  private clicks = new BehaviorSubject(0);
  sharedClicks = this.clicks.asObservable();

  private url = new BehaviorSubject('');
  sharedUrl = this.url.asObservable();

  constructor() {
  }

  getName(name: string) {
    this.name.next(name);
  }

  getLevel(level: number) {
    this.level.next(level);
  }

  getClicks(clicks: number) {
    this.clicks.next(clicks);
  }

  getUrl(url: string) {
    this.url.next(url);
  }

}
