import { Routes } from '@angular/router';
import { AllProducts } from './components/products/all-products/all-products';
import { ProductDetails } from './components/products/product-details/productDetails';
import { NotFound } from './components/not-found/not-found';
import { Login } from './components/login/login';

export const routes: Routes = [
    // this is preferred to be th first path
    {path: '' , component:AllProducts},

    {path: 'product/:id', component:ProductDetails},
    {path: 'products', component:AllProducts},

    // this is a lazy loading path
    {path: 'login', loadComponent:()=> import('./components/login/login').then((c)=> c.Login)},

    // this must be the last path
    {path: '**', component:NotFound},
];
