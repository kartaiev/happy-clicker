import {Component, OnInit} from '@angular/core';
import {SharedStateService} from '../services/shared-state.service';
import {Router} from '@angular/router';
import {LevelValues, URL} from '../dictionary';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isHighscore = false;
  name: string;

  constructor(
    private sharedService: SharedStateService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.sharedService.sharedName$.subscribe(name => this.name = name);
  }

  setUrl(url) {
    this.sharedService.setUrl(url);
    this.router.navigateByUrl(url).then(e => {
      e ? console.log('changed route') : console.log('failed to change route');
    });
    this.isHighscore = true;
  }

  resetUrl(url) {
    this.sharedService.setUrl(URL.HOME);
    this.router.navigateByUrl(url).then(e => {
      e ? console.log('changed route') : console.log('failed to change route');
    });
    this.sharedService.setName('');
    this.isHighscore = false;
  }

  clickLink() {
    this.isHighscore ? this.resetUrl(this.name ? URL.GAME  : URL.HOME) : this.setUrl(URL.HIGH_SCORE);
  }

  linkName() {
   return this.isHighscore ? 'Back' : 'High Scores';
  }

  changePlayer(url) {
    this.sharedService.setName('');
    this.sharedService.setLevel(LevelValues.EASY_VAL);
    this.sharedService.setClicks(0);
    this.sharedService.setUrl(URL.HOME);
    this.router.navigateByUrl(url).then(e => {
      e ? console.log('changed route') : console.log('failed to change route');
    });
    this.isHighscore = false;
  }

}
