import {Component, OnInit} from '@angular/core';
import {SharedStateService} from '../../services/shared-state.service';
import {ScoresService} from '../../services/scores.service';

@Component({
  selector: 'app-game-level',
  templateUrl: './game-level.component.html',
  styleUrls: ['./game-level.component.scss']
})
export class GameLevelComponent implements OnInit {

  level: number;

  levels: any[] = [
    {value: 10, name: this.scoresService.EASY},
    {value: 20, name: this.scoresService.NORMAL},
    {value: 30, name: this.scoresService.HARD},
  ];

  constructor(
    private sharedService: SharedStateService,
    private scoresService: ScoresService
  ) {
  }


  ngOnInit() {
    this.sharedService.sharedLevel$.subscribe(level => this.level = level);
  }

  setLevel(lvl) {
    this.sharedService.setLevel(lvl);
  }

}
