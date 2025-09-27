import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { IUser } from '../_interfaces/user';
import { map, Observable } from 'rxjs';

// we have to create this interface to make it possible to extract products, because our link isn't simple enough.
interface UserApiResponse {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class User {
  http = inject(HttpClient);
  private UsersSignal = signal<IUser[]>([]);
  private userSignal = signal<IUser | undefined>(undefined);

  constructor() {
    this.http
      .get<UserApiResponse>('https://dummyjson.com/users')
      .pipe(
        map((response) => response.users)
      ).subscribe((usersArray) => {
        this.UsersSignal.set(usersArray);
      });
  }

  getAllUsers() {
    return this.UsersSignal;
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`https://dummyjson.com/users/${id}`);
  }

  auth(username: string, password: string) {
    for(const user of this.getAllUsers()()) {
      if(user.password == password && user.username == username) {
        return true;
      }
    }
    return false;
  }

  registeredUserSignal = signal<IUser | undefined>(undefined);

  register(newUser: IUser) {
    newUser.id = this.getAllUsers()().length + 1;
    if (this.registeredUserSignal() === undefined) {
      this.registeredUserSignal.set(newUser);
    }
  }
}
