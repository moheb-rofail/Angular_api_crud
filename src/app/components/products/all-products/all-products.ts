import { Component, inject, signal } from '@angular/core';
import { IProduct } from '../../../interfaces/iproduct';
import { Product } from '../../../services/product';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../prodct-card/prodct-card';

@Component({
  selector: 'app-all-products',
  imports: [RouterLink, ProductCard],
  templateUrl: './all-products.html',
  styleUrl: './all-products.css'
})
export class AllProducts {
  productService = inject(Product);
  products = this.productService.getAllProducts();

}
