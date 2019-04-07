import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopTenComponent } from './top-ten/top-ten.component';

@NgModule({
  declarations: [TopTenComponent],
  imports: [
    CommonModule
  ],
  exports: [TopTenComponent]
})
export class ToplistModule { }
