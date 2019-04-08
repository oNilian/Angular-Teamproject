import { Injectable } from '@angular/core';
import { AboutUs } from './about-us';

@Injectable({
  providedIn: 'root'
})

export class AboutUsService {
  private data: AboutUs[]  = [
    {
      namn: 'Julian',
      git: '',
      link: 'https://www.linkedin.com/in/julian-als%C3%A9n-2a6194167/',
      text: 'Strävsam och glad!',
      img: '/assets/img/owl.jpg'
    },
    {
      namn: 'Ibrahim',
      git: '',
      link: 'https://www.linkedin.com/in/ibrahim-g-86850316b/',
      text: 'Strävsam och glad!',
      img: '/assets/img/ara.png'
    },
    {
      namn: 'Viktor',
      git: '',
      link: '',
      text: 'Strävsam och glad!',
      img: '/assets/img/albert.jpg'
    },
    {
      namn: 'Kristina',
      git: '',
      link: 'https://www.linkedin.com/in/kristina-lomartire-818b39172',
      text: 'Strävsam och glad!',
      img: '/assets/img/monkey.png'
    }
  ]

  constructor() { }

  getData(): AboutUs[]{
    return this.data;
  }
}
