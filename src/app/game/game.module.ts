import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameHomeComponent } from './game-home/game-home.component';
import {FormsModule} from '@angular/forms';
import { GameCountdownComponent } from './game-countdown/game-countdown.component';
import { GameLevelComponent } from './game-level/game-level.component';
import { GameScoreComponent } from './game-score/game-score.component';


@NgModule({
  declarations: [GameHomeComponent, GameCountdownComponent, GameLevelComponent, GameLevelComponent, GameScoreComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule
  ]
})
export class GameModule { }
