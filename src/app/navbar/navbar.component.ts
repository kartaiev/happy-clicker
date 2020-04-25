import {Component, OnInit} from '@angular/core';
import {SharedStateService} from '../services/shared-state.service';
import {Router} from '@angular/router';

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

  getUrl(url) {
    this.sharedService.setUrl(url);
    this.router.navigateByUrl(url).then(e => {
      e ? console.log('changed route') : console.log('failed to change route');
    });
    this.isHighscore = true;
  }

  resetUrl(url) {
    this.sharedService.setUrl('');
    this.router.navigateByUrl(url).then(e => {
      e ? console.log('changed route') : console.log('failed to change route');
    });
    this.sharedService.setName('');
    this.isHighscore = false;
  }

  clickLink() {
    this.isHighscore ? this.resetUrl(this.name ? '/game' : '') : this.getUrl('/highscore');
  }

  linkName() {
   return this.isHighscore ? 'Back' : 'High Scores';
  }

  changePlayer(url) {
    this.sharedService.setName('');
    this.sharedService.setLevel(this.sharedService.DEFAULT_GAME_START);
    this.sharedService.setClicks(0);
    this.sharedService.setUrl('/');
    this.router.navigateByUrl(url).then(e => {
      e ? console.log('changed route') : console.log('failed to change route');
    });
    this.isHighscore = false;
  }

}
