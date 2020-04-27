import {Component, OnInit} from '@angular/core';
import {SharedStateService} from '../../services/shared-state.service';
import {Levels, LevelValues} from '../../dictionary';

@Component({
  selector: 'app-game-level',
  templateUrl: './game-level.component.html',
  styleUrls: ['./game-level.component.scss']
})
export class GameLevelComponent implements OnInit {
  level: number;
 public easyLevel = LevelValues.EASY_VAL;

  levels: any[] = [
    {value: LevelValues.EASY_VAL, name: Levels.EASY},
    {value: LevelValues.NORMAL_VAL, name: Levels.NORMAL},
    {value: LevelValues.HARD_VAL, name: Levels.HARD},
  ];

  constructor(
    private sharedService: SharedStateService,
  ) {
  }


  ngOnInit() {
    this.sharedService.sharedLevel$.subscribe(level => this.level = level);
  }

  setLevel(lvl) {
    this.sharedService.setLevel(lvl);
  }

}
