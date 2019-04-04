import { Component, OnInit } from '@angular/core';
import {WikipediaAPIService} from '../../shared/wikipedia-api.service';

@Component({
  selector: 'app-add-new-article',
  templateUrl: './add-new-article.component.html',
  styleUrls: ['./add-new-article.component.css']
})
export class AddNewArticleComponent implements OnInit {

  titles: string;
  articles: string;
  wikiLink: string;

  constructor(private wikiService: WikipediaAPIService) {
  }

  ngOnInit() {
  }

  searchWikipedia(q: string) {
    return this.wikiService.getArticle(q).subscribe(wiki => {
      this.titles = wiki[1];
      this.articles = wiki[2];
      this.wikiLink = wiki[3];
      console.log(this.wikiLink);
    });
   }
}
