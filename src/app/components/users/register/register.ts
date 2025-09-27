import { JsonPipe, KeyValuePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../_services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, JsonPipe, KeyValuePipe],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  regForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    lastName: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
    }),
  });

  get firstName() {
    return this.regForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.regForm.get('lastName') as FormControl;
  }
  get image() {
    return this.regForm.get('image') as FormControl;
  }
  get email() {
    return this.regForm.get('email') as FormControl;
  }
  get username() {
    return this.regForm.get('username') as FormControl;
  }
  get password() {
    return this.regForm.get('password') as FormControl;
  }

  userService = inject(User);

  router = inject(Router);
  register() {
    const addedUser = this.regForm.value;
    this.userService.register(addedUser as any);
    this.router.navigate(['profile']);
  }
}