import {Component, OnInit} from '@angular/core';
import {SharedStateService} from './services/shared-state.service';
import {Router} from '@angular/router';
import {ScoresService} from './services/scores.service';
import {IScores} from './iscores';
import {GameNums, URL, Levels, LevelValues} from './dictionary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  url: string;
  name: string;
  scores: IScores[] = [];
  clicks: number;
  highscore = 0;
  seconds: number;
  interval: number;
  public end: GameNums.END_GAME;
  public stopCountdown: GameNums.STOP_COUNTDOWN;

  constructor(
    private sharedService: SharedStateService,
    private router: Router,
    private scoresService: ScoresService
  ) {
  }

  lvl(): string {
    if (this.seconds === LevelValues.EASY_VAL) {
      return Levels.EASY;
    }
    if (this.seconds > LevelValues.EASY_VAL
      &&
      this.seconds <= LevelValues.NORMAL_VAL) {
      return Levels.NORMAL;
    }
    if (this.seconds > LevelValues.NORMAL_VAL
      &&
      this.seconds <= LevelValues.HARD_VAL) {
      return Levels.HARD;
    }
  }

  ngOnInit() {
    this.sharedService.sharedName$.subscribe(name => this.name = name);
    this.sharedService.sharedLevel$.subscribe(level => this.seconds = level);
    this.sharedService.sharedClicks$.subscribe(clicks => this.clicks = clicks);
    this.sharedService.sharedUrl$.subscribe(url => this.url = url);
  }


  start(url): void {
    if (this.name) {
      this.router.navigateByUrl(url).then((e) => {
        e ? console.log('changed route') : console.log('failed to change route');
      });
    }
  }

  mainTitle(): string {
    if (this.router.url === URL.GAME) {
      if (this.clicks > 0 && this.seconds > GameNums.STOP_CLICKS_COUNT) {
        return 'Click It, Baby!!!';
      } else if (this.clicks > 0 && this.seconds <= GameNums.STOP_CLICKS_COUNT) {
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

  buttonValue(): string {
    if (this.router.url === URL.GAME) {
      if (this.seconds <= GameNums.END_GAME && this.seconds > GameNums.STOP_COUNTDOWN) {
        return 'The End';
      } else if (this.seconds === GameNums.STOP_COUNTDOWN) {
        return 'Play Again?';
      } else {
        return 'Click';
      }
    } else {
      return 'Submit';
    }
  }

  countdown(): void {
    const lvl = this.lvl();
    this.scores = this.scoresService.getScores(lvl);
    this.sharedService.setClicks(1);
    this.interval = setInterval(() => {
      this.seconds--;
      this.sharedService.setLevel(this.seconds);
      if (this.seconds === GameNums.STOP_COUNTDOWN) {
        clearInterval(this.interval);
        this.interval = undefined;
        this.scoresService.recordPlayersHighscore(
          this.clicks,
          this.highscore,
          this.name,
          this.scores,
          lvl
        );
        this.scoresService.setHighscores(this.scoresService.getScores(lvl));
      }
    }, 1000);
  }

  countClicks(): void {
    this.clicks++;
    this.sharedService.setClicks(this.clicks);
  }

  playAgain(): void {
    this.highscore = this.clicks;
    this.sharedService.setLevel(LevelValues.EASY_VAL);
    this.sharedService.setClicks(0);
  }

  clickIt(): void {
    if (this.router.url === URL.GAME) {
      if (!this.interval && this.seconds > GameNums.STOP_COUNTDOWN) {
        this.countdown();
      }
      if (this.interval && this.seconds > GameNums.STOP_CLICKS_COUNT) {
        this.countClicks();
      }
      if (!this.interval && this.seconds === GameNums.STOP_COUNTDOWN) {
        this.playAgain();
      }
    } else {
      this.start(URL.GAME);
    }
  }

}
