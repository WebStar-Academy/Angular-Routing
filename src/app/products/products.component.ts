import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  item1 =  {
      name :'Product 1',
      price: 100,
      id : 1
  };

  item2 = {
    name :'Product 2',
    price: 100,
    id :2
  };

  item3 = {
    name :'Product 3',
    price: 100,
    id : 3
  }

  constructor() { }

  ngOnInit() {
  }

}
