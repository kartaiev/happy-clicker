import {Component, OnInit} from '@angular/core';
import {ScoresService} from '../../services/scores.service';
import {Levels} from '../../dictionary';
import {IScores} from '../../iscores';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.scss']
})
export class HighscoreComponent implements OnInit {

  easyHighscores: IScores[];
  normalHighscores: IScores[];
  hardHighscores: IScores[];
  level: string;
  public easy = Levels.EASY;
  public normal = Levels.NORMAL;
  public hard = Levels.HARD;

  constructor(private scoresService: ScoresService) {
  }

  setLvlEasy(): void {
    this.level = Levels.EASY;
    this.easyHighscores = this.scoresService.getEasyScores();
  }

  setLvlNormal(): void {
    this.level = Levels.NORMAL;
    this.normalHighscores = this.scoresService.getNormalScores();
  }

  setLvlHard(): void {
    this.level = Levels.HARD;
    this.hardHighscores = this.scoresService.getHardScores();
  }

  ngOnInit(): void {
    this.setLvlEasy();
  }
}
