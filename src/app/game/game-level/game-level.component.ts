import {Component, OnInit} from '@angular/core';
import {SharedStateService} from '../../services/sharedState.service';

@Component({
  selector: 'app-game-level',
  templateUrl: './game-level.component.html',
  styleUrls: ['./game-level.component.scss']
})
export class GameLevelComponent implements OnInit {

  level: number;

  levels: any[] = [
    {value: 10, name: 'easy'},
    {value: 20, name: 'normal'},
    {value: 30, name: 'hard'},
  ];

  constructor(private sharedService: SharedStateService) {
  }


  ngOnInit() {
    this.sharedService.sharedLevel.subscribe(level => this.level = level);
  }

  getLevel(lvl) {
    this.sharedService.getLevel(lvl);
  }

}
