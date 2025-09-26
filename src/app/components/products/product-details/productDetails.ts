import { Component, inject } from '@angular/core';
import { Product } from '../../../_services/product';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../_interfaces/iproduct';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs/operators';
import { Shadow } from "../../../_directives/shadow";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [Shadow],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetails {
  private productsService = inject(Product);
  private route = inject(ActivatedRoute);

  product = toSignal<IProduct>(
  this.route.params.pipe(
    map(params => Number(params['id'])),
    switchMap(id => this.productsService.getProduct(id)) // Observable<IProduct>
  )
);
}
