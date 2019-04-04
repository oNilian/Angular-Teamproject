import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewArticleComponent } from './add-new-article/add-new-article.component';
import {WikipediaAPIService} from '../shared/wikipedia-api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddNewArticleComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  providers: [WikipediaAPIService],
  exports: [
    CommonModule,
    AddNewArticleComponent
  ]
})
export class AddArticleModule { }
