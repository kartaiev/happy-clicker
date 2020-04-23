import {Component, OnInit} from '@angular/core';
import {SharedStateService} from './services/sharedState.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'happy-clicker';
  name: string;
  toStart = false;
  toHighScore = false;
  scores = [];
  clicks = 0;
  highscore = 0;
  seconds: number;
  interval: number;
  END_GAME = 0;
  STOP_COUNTDOWN = -5;
  STOP_CLICKS_COUNT = -1;
  DEFAULT_GAME_START = 10;

  constructor(private sharedService: SharedStateService) {
  }


  ngOnInit() {
    this.sharedService.sharedName.subscribe(name => this.name = name);
    console.log(this.name);
  }

  mainTitle() {
    if (this.toStart) {
      if (this.clicks > 0 && this.seconds > this.STOP_CLICKS_COUNT) {
        return 'Click It, Baby!!!';
      } else if (this.clicks > 0 && this.seconds <= this.STOP_CLICKS_COUNT) {
        if (this.clicks > this.highscore) {
          return 'Your New HIGHSCORE IS...';
        } else {
          return 'Your Score Is...';
        }
      } else {
        return `Ready to Start, ${this.name}?`;
      }
    } else {
      return `Welcome to Happy Clicker!`;
    }
  }

}
