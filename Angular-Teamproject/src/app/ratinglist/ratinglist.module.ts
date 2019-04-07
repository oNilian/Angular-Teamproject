import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AritcleListComponent} from './aritcle-list/aritcle-list.component';
import {FormsModule} from '@angular/forms';
import {WikipediaAPIService} from '../shared/wikipedia-api.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RatingSystemComponent} from './rating-system/rating-system.component';

@NgModule({
  declarations: [AritcleListComponent, RatingSystemComponent],
  imports: [FormsModule, HttpClientModule, BrowserModule, BrowserAnimationsModule],
  providers: [WikipediaAPIService],
  exports: [
    CommonModule,
    AritcleListComponent, RatingSystemComponent
  ],
})
export class RatinglistModule {
}
