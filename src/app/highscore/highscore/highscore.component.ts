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

  setLvlEasy(): void {
    this.level = this.scoresService.EASY;
    this.easyHighscores = this.scoresService.getEasyScores();
  }

  setLvlNormal(): void {
    this.level = this.scoresService.NORMAL;
    this.normalHighscores = this.scoresService.getNormalScores();
  }

  setLvlHard(): void {
    this.level = this.scoresService.HARD;
    this.hardHighscores = this.scoresService.getHardScores();
  }

  ngOnInit(): void {
    this.setLvlEasy();
  }
}
