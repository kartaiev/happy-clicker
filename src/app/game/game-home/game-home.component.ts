import {Component, OnInit} from '@angular/core';
import {SharedStateService} from '../../services/sharedState.service';
import { Animations } from '../../../animations/aninations';

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.component.html',
  styleUrls: ['./game-home.component.scss'],
  animations: [Animations.ShortEnter, Animations.Enter]
})
export class GameHomeComponent implements OnInit {
  name: string;
  seconds: number;
  clicks: number;

  constructor(private sharedService: SharedStateService) {
  }

  ngOnInit() {
    this.sharedService.sharedName.subscribe(name => this.name = name);
    this.sharedService.sharedLevel.subscribe(level => this.seconds = level);
    this.sharedService.sharedClicks.subscribe(clicks => this.clicks = clicks);
  }

}
