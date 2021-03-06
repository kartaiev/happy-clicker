import {Component, OnInit} from '@angular/core';
import {SharedStateService} from '../../services/shared-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string;

  constructor(private sharedService: SharedStateService) {
  }

  ngOnInit() {
    this.sharedService.sharedName$.subscribe(name => this.name = name);
  }

  getName(name) {
    this.sharedService.setName(name);
    console.log(this.name);
  }
}
