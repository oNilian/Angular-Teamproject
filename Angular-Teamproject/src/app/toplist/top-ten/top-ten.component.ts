import {Component, OnInit} from '@angular/core';
import {DatabaseApiService} from '../../shared/database-api.service';
import {ToplistModule} from '../toplist.module';

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {
  private topTenList = [];
  private dataArray = [];

  constructor(private databaseApiService: DatabaseApiService) {
  }

  ngOnInit() {
    this.databaseApiService.getData().subscribe(dataHandler => {
      console.log(dataHandler);

      if (dataHandler.status === 'success') {
        dataHandler.data.forEach((singleData: any) => {
          this.dataArray.push(JSON.parse(singleData.value));
        });
        this.topTenList = this.dataArray.sort((x: any, y: any) => y.rating - x.rating).slice(0, 10);
        this.topTenList.forEach(data => {
          const rating = data.rating;
          data.rating = '';
          let i = 0;
          while (i < rating) {
            data.rating += '⭐ ';
            i++;
          }
        });
      } else {
        console.log('Database API Error!');
      }
    });
  }
}
