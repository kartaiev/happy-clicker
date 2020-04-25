import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IScores} from '../iscores';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private highscores = new BehaviorSubject([]);
  EASY = 'easy';
  NORMAL = 'normal';
  HARD = 'hard';

  constructor() {
  }

  setHighscores(highscore: IScores[]): void {
    this.highscores.next(highscore);
  }

  getEasyScores(): IScores[] {
    return JSON.parse(localStorage.getItem(this.EASY));
  }

  getNormalScores(): IScores[] {
    return JSON.parse(localStorage.getItem(this.NORMAL));
  }

  getHardScores(): IScores[] {
    return JSON.parse(localStorage.getItem(this.HARD));
  }


  getScores(lvl): IScores[] {
    if (lvl === this.EASY && localStorage.getItem(this.EASY)) {
      return this.getEasyScores();
    } else if (lvl === this.NORMAL && localStorage.getItem(this.NORMAL)) {
      return this.getNormalScores();
    } else if (lvl === this.HARD && localStorage.getItem(this.HARD)) {
      return this.getHardScores();
    } else {
      return [];
    }
  }

  recordPlayersHighscore(
    clicks: number,
    highscore: number,
    name: string,
    arr: IScores[],
    lvl: string,
  ): void {
    if (clicks > highscore) {
      const i = arr.indexOf(
        arr.find((obj) => Object.values(obj).includes(name))
      );
      i === -1
        ? arr.push({name, highscore: clicks})
        : (arr[i] = {name, highscore: clicks});
      localStorage.setItem(lvl, JSON.stringify(arr.sort((a, b) => b.highscore - a.highscore)));
    }
  }
}
