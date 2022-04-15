import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANT } from '../utility/stringConstant';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public stringListComponent = CONSTANT;

  constructor(private router: Router) {}

  onButtonClick(flag: any) {
    switch (flag) {
      case 1:
        this.router.navigate(['/buttons']);
        break;
      case 2:
        this.router.navigate(['/scroller']);
        break;
      case 3:
        this.router.navigate(['/listview']);
        break;
      case 4:
        this.router.navigate(['/alert']);
        break;
      case 5:
        this.router.navigate(['/action-sheet']);
        break;
      case 6:
        this.router.navigate(['/card']);
        break;
      case 7:
        this.router.navigate(['/checkbox']);
        break;
      case 8:
        this.router.navigate(['/radio']);
        break;
      case 9:
        this.router.navigate(['/chip']);
        break;
      case 10:
        this.router.navigate(['/content']);
        break;
      case 11:
        this.router.navigate(['/date-time-picker']);
        break;
      case 12:
        this.router.navigate(['/floting-button']);
        break;
      case 13:
        this.router.navigate(['/modal']);
        break;
      case 14:
        this.router.navigate(['/menu']);
        break;
      case 15:
        this.router.navigate(['/popover']);
        break;
      case 16:
        this.router.navigate(['/refresher']);
        break;
      case 17:
        this.router.navigate(['/porgress-indicators']);
        break;
      case 18:
        this.router.navigate(['/segment']);
        break;
      case 19:
        this.router.navigate(['/slides']);
        break;
      case 20:
        this.router.navigate(['/toast']);
        break;
      case 21:
        this.router.navigate(['/toggle']);
        break;
      case 22:
        this.router.navigate(['/toolbar']);
        break;
    }
  }

  onButtonComponentClick() {
    this.router.navigate(['/buttons']);
  }
  onMixButtonClick() {
    this.router.navigate(['/scroller']);
  }
}
