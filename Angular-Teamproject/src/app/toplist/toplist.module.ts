import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopTenComponent} from './top-ten/top-ten.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TopTenComponent],
  imports: [
    CommonModule, NgbModule
  ],
  exports: [TopTenComponent],
  providers: []
})
export class ToplistModule {
}
