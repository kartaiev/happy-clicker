import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
