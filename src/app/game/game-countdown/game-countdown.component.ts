import { Component, OnInit } from '@angular/core';
import {SharedStateService} from '../../services/shared-state.service';

@Component({
  selector: 'app-game-countdown',
  templateUrl: './game-countdown.component.html',
  styleUrls: ['./game-countdown.component.scss']
})
export class GameCountdownComponent implements OnInit {
  seconds: number;

  constructor(private sharedService: SharedStateService) {
  }

  ngOnInit() {
    this.sharedService.sharedLevel$.subscribe(level => this.seconds = level);
  }

}
