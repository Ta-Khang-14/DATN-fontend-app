import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  constructor(public route: Router) {}

  ngOnInit(): void {}

  addProduct() {
    this.route.navigate(['/admin/product-form']);
  }
}
