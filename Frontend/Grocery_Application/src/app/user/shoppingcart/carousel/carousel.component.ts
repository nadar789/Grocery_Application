import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  slides = [
    { image: 'assets/Carousel/BabyCare.jpg', 
      title: 'Slide 1',
      description: 'Description 1',
      text: 'Image Of Babycare'
    },

    { image: 'assets/Carousel/Furniture.jpg',
      title: 'Slide 2',
      description: 'Description 2',
      text: 'Image of furniture'
     },

    { image: 'assets/Carousel/Kitchen.jpg',
      title: 'Slide 3', 
      description: 'Description 3',
      text: 'Image of Kitchen'
     }
  ];

}
