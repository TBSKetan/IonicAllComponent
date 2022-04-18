import { CONSTANT } from './../utility/stringConstant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

  public form = [
    { val: 'Test 1', isChecked: false },
    { val: 'Test 2', isChecked: false },
    { val: 'Test 3', isChecked: false },
  ];

  public stringConstant = CONSTANT;
  selectedRadioGroup: any;

  constructor() { }

  ngOnInit() {
  }
  radioGroupChange(event){
    //this.selectedRadioGroup  = event.detail;
    console.log('radioGroupChange', event.detail);
  }
  radioGroupChange1(event){
    //this.selectedRadioGroup  = event.detail;
    console.log('radioGroupChange', event.detail);
  }

}
