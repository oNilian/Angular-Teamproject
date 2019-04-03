import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AritcleListComponent} from './aritcle-list/aritcle-list.component';
import {FormsModule} from '@angular/forms';
import {WikipediaAPIService} from '../shared/wikipedia-api.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [AritcleListComponent],
  imports: [FormsModule, HttpClientModule, BrowserModule],
  providers: [WikipediaAPIService],
  exports: [
    CommonModule,
    AritcleListComponent
  ],
})
export class RatinglistModule {
}
