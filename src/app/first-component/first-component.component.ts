import { Component, OnInit } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      name: 'Rocky vs Apollo',
      price: 100000,
      image: './assets/1-Rocky-apollo.jpg'
    },
    {
      name: 'Rocky vs Clubber',
      price: 500000,
      image: './assets/2-rocky-clubber.jpg'
    },
    {
      name: 'Rocky vs Drago',
      price: 9999999999999,
      image: './assets/3-rocky-drago.jpg',
      category: '10/2/1-999'
    }
  ]
}
