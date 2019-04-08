import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AritcleListComponent} from './aritcle-list/aritcle-list.component';
import {FormsModule} from '@angular/forms';
import {WikipediaAPIService} from '../shared/wikipedia-api.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RatingSystemComponent} from './rating-system/rating-system.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatSliderModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AritcleListComponent, RatingSystemComponent,  ],
  imports: [MatSliderModule, FormsModule, HttpClientModule, BrowserModule, BrowserAnimationsModule, Ng2SearchPipeModule, NgbModule],
  providers: [WikipediaAPIService],
  exports: [
    AritcleListComponent, RatingSystemComponent,
  ],
  bootstrap: [ ]
})
export class RatinglistModule {
}
