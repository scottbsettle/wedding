import { Component } from '@angular/core';
import { Images } from '../../DTOs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images: any | undefined;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor() {
    this.images = [
      {
        itemImageSrc: '../../../assets/disneysprings.jpg',
        thumbnailImageSrc: '../../../assets/disneysprings.jpg'
      }, {
        itemImageSrc: '../../../assets/epcot01.jpg',
        thumbnailImageSrc: '../../../assets/epcot01.jpg'
      }
      , {
        itemImageSrc: '../../../assets/newyork03.jpg',
        thumbnailImageSrc: '../../../assets/newyork03.jpg'
      },
      {
        itemImageSrc: '../../../assets/Universal002.jpg',
        thumbnailImageSrc: '../../../assets/Universal002.jpg'
      },
      {
        itemImageSrc: '../../../assets/universalChristmas.jpg',
        thumbnailImageSrc: '../../../assets/universalChristmas.jpg'
      },
      {
        itemImageSrc: '../../../assets/Disney01.jpg',
        thumbnailImageSrc: '../../../assets/Disney01.jpg'
      }]
  }
}
