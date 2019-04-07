import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule 
  ],
  exports: [
    CommonModule,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class NavigationModule { }
