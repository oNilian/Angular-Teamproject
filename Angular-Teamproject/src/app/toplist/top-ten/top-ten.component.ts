import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../../shared/database-api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {
  public getDatabase: Observable<any>;

  constructor(private database: DatabaseApiService) { }

  ngOnInit() {
    this.database.getData().subscribe(dataHandler => {
      if (dataHandler.status === 'success') {
        const dataArray = [];
        dataHandler.data.forEach((singleData: any) => {
          dataArray.push(JSON.parse(singleData.value));
        });
        console.log('dataArray: ', dataArray);
        let topTenList = dataArray.sort( (x: any, y: any) => y.value - x.value );
        topTenList = topTenList.slice(0, 10);
        console.log(topTenList);
      } else {
        console.log('Top-ten subscribtion error!');
      }
    });
  }

}
