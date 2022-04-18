import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  dummyList: any;

  constructor() {
    this.dummyList = [
      {
        value: 'Esteban Gutmann IV',
      }, {
        value: 'Bernardo Prosacco Jr.',
      }, {
        value: 'Nicholaus Kulas PhD',
      }, {
        value: 'Jennie Feeney',
      }, {
        value: 'Shanon Heaney',
      }, {
        value: 'Bernardo Prosacco Jr.',
      }, {
        value: 'Nicholaus Kulas PhD',
      }, {
        value: 'Jennie Feeney',
      }, {
        value: 'Shanon Heaney',
      }, {
        value: 'Bernardo Prosacco Jr.',
      }, {
        value: 'Nicholaus Kulas PhD',
      }, {
        value: 'Jennie Feeney',
      }, {
        value: 'Shanon Heaney',
      }, {
        value: 'Bernardo Prosacco Jr.',
      }, {
        value: 'Nicholaus Kulas PhD',
      }, {
        value: 'Jennie Feeney',
      }, {
        value: 'Shanon Heaney',
      }, {
        value: 'Bernardo Prosacco Jr.',
      }, {
        value: 'Nicholaus Kulas PhD',
      }, {
        value: 'Jennie Feeney',
      }, {
        value: 'Shanon Heaney',
      }, {
        value: 'Bernardo Prosacco Jr.',
      }, {
        value: 'Nicholaus Kulas PhD',
      }, {
        value: 'Jennie Feeney',
      }, {
        value: 'Shanon Heaney',
      }
    ];
  }

  ngOnInit() {
  }
  logScrollStart(event) {
    console.log('logScrollStart : When Scroll Starts', event);
  }

  logScrolling(event) {
    console.log('logScrolling : When Scrolling', event);
  }

  logScrollEnd(event) {
    console.log('logScrollEnd : When Scroll Ends', event);
  }

  scrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  scrollToTop() {
    this.content.scrollToTop(1500);
  }

  scrollToPoint(x, y) {
    this.content.scrollToPoint(x, y, 1500);
  }
}
