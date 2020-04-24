import {Component, OnInit} from '@angular/core';
import {SharedStateService} from './services/sharedState.service';
import {Router} from '@angular/router';
import {ScoresService} from './services/scores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'happy-clicker';
  name: string;
  scores = [];
  clicks: number;
  highscore = 0;
  seconds: number;
  interval: number;

  constructor(
    private sharedService: SharedStateService,
    private router: Router,
    private scoresService: ScoresService
  ) {
  }

  ngOnInit() {
    this.scores = this.scoresService.getScores();
    this.sharedService.sharedName.subscribe(name => this.name = name);
    this.sharedService.sharedLevel.subscribe(level => this.seconds = level);
    this.sharedService.sharedClicks.subscribe(clicks => this.clicks = clicks);
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
      if (this.clicks > 0 && this.seconds > this.sharedService.STOP_CLICKS_COUNT) {
        return 'Click It, Baby!!!';
      } else if (this.clicks > 0 && this.seconds <= this.sharedService.STOP_CLICKS_COUNT) {
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
      if (this.seconds <= this.sharedService.END_GAME && this.seconds > this.sharedService.STOP_COUNTDOWN) {
        return 'The End';
      } else if (this.seconds === this.sharedService.STOP_COUNTDOWN) {
        return 'Play Again?';
      } else {
        return 'Click';
      }
    } else {
      return 'Submit';
    }
  }

  countdown() {
    this.sharedService.getClicks(1);
    this.interval = setInterval(() => {
      this.seconds--;
      this.sharedService.getLevel(this.seconds);
      if (this.seconds === this.sharedService.STOP_COUNTDOWN) {
        clearInterval(this.interval);
        this.interval = undefined;
        this.scoresService.recordPlayersHighscore(
          this.clicks,
          this.highscore,
          this.name,
          this.scores
        );
        console.log(this.name);
      }
    }, 1000);
  }

  countClicks() {
    this.clicks++;
    this.sharedService.getClicks(this.clicks);
  }

  playAgain() {
    this.highscore = this.clicks;
    this.sharedService.getLevel(this.sharedService.DEFAULT_GAME_START);
    this.sharedService.getClicks(0);
  }

  clickIt() {
    if (this.router.url === '/game') {
      if (!this.interval && this.seconds > this.sharedService.STOP_COUNTDOWN) {
        this.countdown();
      }
      if (this.interval && this.seconds > this.sharedService.STOP_CLICKS_COUNT) {
        this.countClicks();
      }
      if (!this.interval && this.seconds === this.sharedService.STOP_COUNTDOWN) {
        this.playAgain();
      }
    } else {
      this.start('game');
    }
  }

}
