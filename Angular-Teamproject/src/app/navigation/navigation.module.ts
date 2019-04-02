import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class NavigationModule { }
