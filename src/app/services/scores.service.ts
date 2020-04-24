import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private highscores = new BehaviorSubject([]);
  sharedHighscores = this.highscores.asObservable();

  constructor() {
  }

  getHighscores(highscore) {
    this.highscores.next(highscore);
  }

  getEasyScores() {
    return JSON.parse(localStorage.getItem('easy'));
  }

  getNormalScores() {
    return JSON.parse(localStorage.getItem('normal'));
  }

  getHardScores() {
    return JSON.parse(localStorage.getItem('hard'));
  }


  getScores(lvl) {
    if (lvl === 'easy' && localStorage.getItem('easy')) {
      return this.getEasyScores();
    } else if (lvl === 'normal' && localStorage.getItem('normal')) {
      return this.getNormalScores();
    } else if (lvl === 'hard' && localStorage.getItem('hard')) {
      return this.getHardScores();
    } else {
      return [];
    }
  }

  recordPlayersHighscore(
    clicks: number,
    highscore: number,
    name: string,
    arr: any[],
    lvl: string,
  ) {
    if (clicks > highscore) {
      arr.sort((a, b) => b.highscore - a.highscore);
      const i = arr.indexOf(
        arr.find((obj) => Object.values(obj).includes(name))
      );
      i === -1
        ? arr.push({name, highscore: clicks})
        : (arr[i] = {name, highscore: clicks});
      localStorage.setItem(lvl, JSON.stringify(arr));
    }
  }
}
