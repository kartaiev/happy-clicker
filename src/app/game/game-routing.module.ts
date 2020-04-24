import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameHomeComponent} from './game-home/game-home.component';


const routes: Routes = [{
  path: 'game',
  component: GameHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
