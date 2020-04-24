import {Component, OnInit} from '@angular/core';
import {SharedStateService} from '../../services/sharedState.service';

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.component.html',
  styleUrls: ['./game-home.component.scss']
})
export class GameHomeComponent implements OnInit {

  name: string;
  level: number;
  levels: any[] = [
    {value: 10, name: 'easy'},
    {value: 20, name: 'normal'},
    {value: 30, name: 'hard'},
  ];

  constructor(private sharedService: SharedStateService) {
  }

  ngOnInit() {
    this.sharedService.sharedName.subscribe(name => this.name = name);
    this.sharedService.sharedLevel.subscribe(level => this.level = level);
  }

  getLevel(lvl) {
    this.sharedService.getLevel(lvl);
  }

}
