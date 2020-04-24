import {Component, OnInit} from '@angular/core';
import {SharedStateService} from './services/sharedState.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'happy-clicker';
  name: string;
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

  constructor(private sharedService: SharedStateService, private router: Router) {
  }


  ngOnInit() {
    this.sharedService.sharedName.subscribe(name => this.name = name);
    this.sharedService.sharedLevel.subscribe(level => this.seconds = level);
  }

  start(url) {
    if (this.name) {
      this.router.navigateByUrl(url).then((e) => {
        e ? console.log('changed route') : console.log('failed to change route');
      });
    }
  }

  mainTitle() {
    if (this.router.url === '/game') {
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

  buttonValue() {
    if (this.router.url === '/game') {
      if (this.seconds <= this.END_GAME && this.seconds > this.STOP_COUNTDOWN) {
        return 'The End';
      } else if (this.seconds === this.STOP_COUNTDOWN) {
        return 'Play Again?';
      } else {
        return 'Click';
      }
    } else {
      return 'Submit';
    }
  }

}
