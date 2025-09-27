import { Component, inject } from '@angular/core';
import { User } from '../../../_services/user';
import { IUser } from '../../../_interfaces/user';

@Component({
  selector: 'app-single-user',
  imports: [],
  templateUrl: './single-user.html',
  styleUrl: './single-user.css'
})
export class SingleUser {
  userService = inject(User);

  user:IUser | undefined = this.userService.registeredUserSignal();
  
}
