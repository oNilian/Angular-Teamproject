import { Component, OnInit } from '@angular/core';
import {WikipediaAPIService} from '../../shared/wikipedia-api.service';
import { DatabaseApiService } from '../../shared/database-api.service';

@Component({
  selector: 'app-add-new-article',
  templateUrl: './add-new-article.component.html',
  styleUrls: ['./add-new-article.component.css']
})
export class AddNewArticleComponent implements OnInit {
  [x: string]: any;
  titles = [];
  articles = [];
  wikiLink = [];
  newArticle: string;

  constructor(private wikiService: WikipediaAPIService, private databaseApiService: DatabaseApiService ) {
  }

  ngOnInit() {

  }

  searchWikipedia(q: string) {
    return this.wikiService.getArticle(q).subscribe(wiki => {
      this.titles = [];
      this.articles = [];
      this.wikiLink = [];
      wiki[1].forEach(data =>{
        this.titles.push(data);
      });
      wiki[2].forEach(data =>{
        this.articles.push(data);
      });
      wiki[3].forEach(data =>{
        this.wikiLink.push(data);
      });

    });
  }

  onAddToListClick(title: string, article: string, url: string) {
    this.databaseApiService.setData(title, article, url);
  }

}
