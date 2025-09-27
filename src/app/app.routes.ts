import { Routes } from '@angular/router';
import { AllProducts } from './components/products/all-products/all-products';
import { ProductDetails } from './components/products/product-details/productDetails';
import { NotFound } from './components/not-found/not-found';
import { Login } from './components/users/login/login';

export const routes: Routes = [
    // this is preferred to be th first path
    {path: '' , component:AllProducts},

    {path: 'product/:id', component:ProductDetails},
    {path: 'products', component:AllProducts},

    // this is a lazy loading path
    {path: 'profile', loadComponent:()=> import('./components/users/single-user/single-user').then((c)=> c.SingleUser)},
    {path: 'login', loadComponent:()=> import('./components/users/login/login').then((c)=> c.Login)},
    {path: 'register', loadComponent:()=> import('./components/users/register/register').then((c)=> c.Register)},

    // this must be the last path
    {path: '**', component:NotFound},
];
