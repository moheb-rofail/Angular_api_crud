import { Component, inject, signal } from '@angular/core';
import { IProduct } from '../../../interfaces/iproduct';
import { Product } from '../../../services/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-products',
  imports: [RouterLink],
  templateUrl: './all-products.html',
  styleUrl: './all-products.css'
})
export class AllProducts {
  productService = inject(Product);
  products = this.productService.getAllProducts();

}
