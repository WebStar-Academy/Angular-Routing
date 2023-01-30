import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any;

  prodcuts = [
    {
      name: "Product 1",
      price: 100,
      id: 1,
    },
    {
      name: "Product 2",
      price: 100,
      id: 2,
    },
    {
      name: "Product 3",
      price: 100,
      id: 3,
    },
  ];

  constructor(
    private route : ActivatedRoute
  ) {}

  ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this.productDetails = this.prodcuts.find((product) => {
         return product.id === parseInt(id);
      })
  }
}
