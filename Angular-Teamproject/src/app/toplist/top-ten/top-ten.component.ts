import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../../shared/database-api.service';
@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {
  topTenList: Array<object> = [];
  databaseArray: Array<object> = [];

  constructor(private databaseApiService: DatabaseApiService) { }

  ngOnInit() {
    this.databaseArray = this.databaseApiService.getData();
    console.log(this.databaseArray);
    
    this.topTenList = this.databaseArray.sort( (x: any, y: any) => {
      console.log('why doesnt this shit work');
      
      console.log('x: ', x);
      console.log('y: ', y);
      return y.rating - x.rating
    }).slice(0, 10);
    console.log(this.topTenList);

    /*
    this.topTenList.forEach(data => {
      let rating = data.rating;
      data.rating = '';
      let i=0;
      while(i < rating) {
        data.rating += '⭐ ';
        i++;
      }
    });
    */
  }
  sortTopTen() {

  }
}
