import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameHomeComponent } from './game-home/game-home.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [GameHomeComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule
  ]
})
export class GameModule { }
