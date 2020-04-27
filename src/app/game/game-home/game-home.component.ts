import {Component, OnInit} from '@angular/core';
import {SharedStateService} from '../../services/shared-state.service';
import { Animations } from '../game-animations/animations';
import {GameNums} from '../../dictionary';

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
  public end = GameNums.END_GAME;
  public stopCount = GameNums.STOP_CLICKS_COUNT;

  constructor(private sharedService: SharedStateService) {
  }

  ngOnInit() {
    this.sharedService.sharedName$.subscribe(name => this.name = name);
    this.sharedService.sharedLevel$.subscribe(level => this.seconds = level);
    this.sharedService.sharedClicks$.subscribe(clicks => this.clicks = clicks);
  }

}
