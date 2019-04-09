import {Component, OnInit} from '@angular/core';
import {DatabaseApiService} from '../../shared/database-api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-aritcle-list',
  templateUrl: './aritcle-list.component.html',
  styleUrls: ['./aritcle-list.component.css']
})
export class AritcleListComponent implements OnInit {
  private uniqueID = [];
  searchText: any;
  dataArray = [];
  private groupID: string = '&group=rw2YB';
  private baseURL: string = 'https://forverkliga.se/JavaScript/api/api-db.php?';

  sortByTitle() {
    this.dataArray.sort((a, b) => a.title.localeCompare(b.title));
  }

  reverseSortbyTitle() {
    this.dataArray.sort((a, b) => b.title.localeCompare(a.title));

  }

  constructor(private databaseApiService: DatabaseApiService) {
    console.log(this.dataArray);
  }

  deleteThisArticle(i) {
    this.databaseApiService.delData(this.uniqueID[i]);
    this.dataArray.splice(i, 1);
  }


  SaveObjectFromRatingList(wiki, i) {
    confirm('You gave this article ' + wiki.rating + ' stars. Thanks for rating and using this app!');
    this.databaseApiService.setData(wiki.title, wiki.article, this.baseURL, wiki.rating, this.uniqueID[i]);
  }

  ngOnInit() {
    this.databaseApiService.getData().subscribe(dataHandler => {
      if (dataHandler.status === 'success') {
        dataHandler.data.forEach((singleData: any) => {
          this.dataArray.push(JSON.parse(singleData.value));
          this.uniqueID.push(singleData.key);
        });
      } else {
        console.log('Database API Error!');
      }
    });
  }
}
