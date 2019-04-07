import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-system',
  templateUrl: './rating-system.component.html',
  styleUrls: ['./rating-system.component.css']
})
export class RatingSystemComponent implements OnInit {

  constructor() {
  }

  initValue = 1;

  ngOnInit() {
  }

  rateArticle() {
    let result;
    switch (this.initValue) {
      case 1:
        result = '1-10';
        break;
      case 2:
        result = '11-50';
        break;
      case 3:
        result = '51-200';
        break;
      case 4:
        result = '201-500';
        break;
      case 5:
        result = '501-1,000';
        break;
      case 6:
        result = '1,001-5,000';
        break;
      case 7:
        result = '5000+';
        break;
    }
    return `${result} employees`;
  }
}

