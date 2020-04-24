import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor() {
  }

  getScores() {
    if (localStorage.getItem('scores')) {
      return JSON.parse(localStorage.getItem('scores'));
    } else {
      return [];
    }
  }

  recordPlayersHighscore(
    clicks: number,
    highscore: number,
    name: string,
    arr: any[]
  ) {
    if (clicks > highscore) {
      arr.sort((a, b) => b.highscore - a.highscore);
      const i = arr.indexOf(
        arr.find((obj) => Object.values(obj).includes(name))
      );
      i === -1
        ? arr.push({name, highscore: clicks})
        : (arr[i] = {name, highscore: clicks});
      localStorage.setItem('scores', JSON.stringify(arr));
    }
  }
}
