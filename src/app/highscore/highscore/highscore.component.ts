import {Component, OnInit} from '@angular/core';
import {ScoresService} from '../../services/scores.service';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.scss']
})
export class HighscoreComponent implements OnInit {

  easyHighscores: any[];
  normalHighscores: any[];
  hardHighscores: any[];
  level: string;

  constructor(private scoresService: ScoresService) {
  }

  setLvlEasy() {
    this.level = 'easy';
    this.easyHighscores = this.scoresService.getEasyScores();
  }

  setLvlNormal() {
    this.level = 'normal';
    this.normalHighscores = this.scoresService.getNormalScores();
  }

  setLvlHard() {
    this.level = 'hard';
    this.hardHighscores = this.scoresService.getHardScores();
  }

  ngOnInit(): void {
    this.setLvlEasy();
    console.log(this.normalHighscores);
  }
}
