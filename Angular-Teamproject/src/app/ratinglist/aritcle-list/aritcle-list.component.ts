import {Component, OnInit} from '@angular/core';
import {DatabaseApiService} from '../../shared/database-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-aritcle-list',
  templateUrl: './aritcle-list.component.html',
  styleUrls: ['./aritcle-list.component.css']
})
export class AritcleListComponent implements OnInit {
  private uniqueID = [];
  searchText: any;
  dataArray = [];
  private baseURL: string = 'https://forverkliga.se/JavaScript/api/api-db.php?';

  sortByTitle() {
    this.dataArray.sort((a, b) => a.title.localeCompare(b.title));
  }

  reverseSortbyTitle() {
    this.dataArray.sort((a, b) => b.title.localeCompare(a.title));

  }


  constructor(private databaseApiService: DatabaseApiService) {
  }


  SaveObjectFromRatingList(wiki, i) {
    // function RemoveProduct() {
    //   if (confirm("Poista?") == true) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }


    confirm('You gave this article ' + wiki.rating + ' stars. Thanks for rating and using this app!');
    this.databaseApiService.setData(wiki.title, wiki.article, this.baseURL, wiki.rating, this.uniqueID[i]);

  }
  // DeleteThisArticle(){
  //
  // }

  ngOnInit() {

    this.databaseApiService.getData().subscribe(dataHandler => {
      if (dataHandler.status === 'success') {
        dataHandler.data.forEach((singleData: any) => {
          this.dataArray.push(JSON.parse(singleData.value));
          this.uniqueID.push(singleData.key);
          console.log(singleData.key);
        });
      } else {
        console.log('Database API Error!');
      }
    });
  }
}
