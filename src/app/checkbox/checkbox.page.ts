/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  public form = [
    { val: 'Test 1', isChecked: true },
    { val: 'Test 2', isChecked: false },
    { val: 'Test 3', isChecked: false },
  ];

  testList: any = [
    { testID: 1, testName: 'test1', checked: false },
    { testID: 2, testName: 'test2', checked: false },
    { testID: 3, testName: 'test3', checked: false },
    { testID: 4, testName: 'test4', checked: false },
  ];

  question = {
    options: ['A', 'B', 'C', 'D', 'E'],
  };

  selectedArray: any = [];
  checkedItems = [];
  constructor() {}

  ngOnInit() {}

  selectCheckBox(data: any) {
    if (data.checked === true) {
      this.selectedArray.push(data);
    } else {
      const newArray = this.selectedArray.filter(function(el) {
        return el.testID !== data.testID;
      });
      this.selectedArray = newArray;
    }
    console.log(this.selectedArray);
  }

  checkAll() {
    for (let i = 0; i <= this.testList.length; i++) {
      this.testList[i].checked = true;
    }
    console.log(this.testList);
  }
  onChange(item) {
    if (this.checkedItems.includes(item)) {
      this.checkedItems = this.checkedItems.filter((value) => value !== item);
    } else {
      this.checkedItems.push(item);
    }
  }

  onCheckSingle(event: any) {
    if (event.detail.checked) {
      console.log('It\'s checked', event);
    } else if (!event.detail.checked) {
      console.log(`It's unchecked`, event);
    }
  }
}
