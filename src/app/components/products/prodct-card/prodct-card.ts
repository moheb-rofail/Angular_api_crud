import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IProduct } from '../../../interfaces/iproduct';
import { CurrencyPipe } from '@angular/common';
import { ExcerptPipe } from '../../../pipes/excerpt-pipe';

@Component({
  selector: 'app-prodct-card',
  imports: [RouterLink, CurrencyPipe, ExcerptPipe],
  templateUrl: './prodct-card.html',
  styleUrl: './prodct-card.css'
})
export class ProductCard {
  rout = inject(Router);
  product = input<IProduct>();
  go2Product(id: any) {
    this.rout.navigate(['/product', id]);
  }
}
