import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../../shared/database-api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {
  topTenList = [];

  constructor(private database: DatabaseApiService) { }

  ngOnInit() {
    this.database.getData().subscribe(dataHandler => {
      let dataArray = [];
      if (dataHandler.status === 'success') {
        dataHandler.data.forEach((singleData: any) => {
          dataArray.push( JSON.parse(singleData.value) );
        });
        this.topTenList = dataArray.sort( (x: any, y: any) => y.rating - x.rating );
        this.topTenList = this.topTenList.slice(0, 10);
        this.topTenList.forEach(data => {
          let rating = data.rating;
          data.rating = '';
          let i=0;
          while(i < rating) {
            data.rating += '⭐';
            i++;
          }
        });
      } else {
        console.log('Top-ten subscribtion error!');
      }
    });
  }

}
