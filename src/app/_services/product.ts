import { inject, Injectable, signal } from '@angular/core';
import { IProduct } from '../_interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

// we have to create this interface to make it possible to extract products, because our link isn't simple enough.
interface ProductApiResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})

export class Product {
  http = inject(HttpClient);
  private ProductsSignal = signal<IProduct[]>([]);

  constructor() {
    this.http
      .get<ProductApiResponse>('https://dummyjson.com/products?limit=10&skip=20')
      .pipe(
        map((response) => response.products)
      ).subscribe((productsArray) => {
        this.ProductsSignal.set(productsArray);
      });
  }

  getAllProducts() {
    return this.ProductsSignal;
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`https://dummyjson.com/products/${id}`);
  }
}
