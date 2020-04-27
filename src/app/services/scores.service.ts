import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IScores} from '../iscores';
import {Levels} from '../dictionary';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private highscores = new BehaviorSubject([]);


  constructor() {
  }

  setHighscores(highscore: IScores[]): void {
    this.highscores.next(highscore);
  }

  getEasyScores(): IScores[] {
    return JSON.parse(localStorage.getItem(Levels.EASY));
  }

  getNormalScores(): IScores[] {
    return JSON.parse(localStorage.getItem(Levels.NORMAL));
  }

  getHardScores(): IScores[] {
    return JSON.parse(localStorage.getItem(Levels.HARD));
  }


  getScores(lvl): IScores[] {
    if (lvl === Levels.EASY && localStorage.getItem(Levels.EASY)) {
      return this.getEasyScores();
    } else if (lvl === Levels.NORMAL && localStorage.getItem(Levels.NORMAL)) {
      return this.getNormalScores();
    } else if (lvl === Levels.HARD && localStorage.getItem(Levels.HARD)) {
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
