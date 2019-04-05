import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import { Validators, AbstractControl } from '@angular/forms'
import {WikipediaAPIService} from '../../shared/wikipedia-api.service';
import { DatabaseApiService } from '../../shared/database-api.service'

@Component({
 selector: 'app-add-new-article',
 templateUrl: './add-new-article.component.html',
 styleUrls: ['./add-new-article.component.css']
})
export class AddNewArticleComponent implements OnInit {
  [x: string]: any;
  databaseApiService: DatabaseApiService;
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

  onAddToListClick(item){
    this.databaseApiService.setData(
      {
       title: "Random wiki entry 13",
       article: "long information about the entry",
       link: "http://en.wikipedia.org/wiki/random",
       rating: 5
    },
    6758);
  }

//{“title”: “Random wiki entry 13", “article”: “long information about the entry”, “link”: “http://en.wikipedia.org/wiki/random“, “rating”: 5}

}
