import {Component, OnInit} from '@angular/core';
import {SharedStateService} from '../services/sharedState.service';
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
    this.sharedService.sharedName.subscribe(name => this.name = name);
  }

  getUrl(url) {
    this.sharedService.getUrl(url);
    this.router.navigateByUrl(url).then(e => {
      e ? console.log('changed route') : console.log('failed to change route');
    });
    this.isHighscore = true;
  }

  resetUrl(url) {
    this.sharedService.getUrl('');
    this.router.navigateByUrl(url).then(e => {
      e ? console.log('changed route') : console.log('failed to change route');
    });
    this.sharedService.getName('');
    this.isHighscore = false;
  }

  clickLink() {
    this.isHighscore ? this.resetUrl(this.name ? '/game' : '') : this.getUrl('/highscore');
  }

  linkName() {
   return this.isHighscore ? 'Back' : 'High Scores';
  }

  changePlayer(url) {
    this.sharedService.getName('');
    this.sharedService.getLevel(this.sharedService.DEFAULT_GAME_START);
    this.sharedService.getClicks(0);
    this.sharedService.getUrl('/');
    this.router.navigateByUrl(url).then(e => {
      e ? console.log('changed route') : console.log('failed to change route');
    });
    this.isHighscore = false;
  }

}
