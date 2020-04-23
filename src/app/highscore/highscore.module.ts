import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighscoreRoutingModule } from './highscore-routing.module';
import { HighscoreComponent } from './highscore/highscore.component';


@NgModule({
  declarations: [HighscoreComponent],
  imports: [
    CommonModule,
    HighscoreRoutingModule
  ]
})
export class HighscoreModule { }
