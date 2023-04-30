import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  enpoint: string = 'https://localhost:7290/api/product/';

  constructor() {}

  createdProduct() {}
}
