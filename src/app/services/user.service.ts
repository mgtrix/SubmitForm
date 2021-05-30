import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { config } from 'process';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${'http://localhost:4000'}/users`)
  }
  register(user: User) {
    return this.http.post(`${'http://localhost:4000'}/users/register`, user);
}

 delete(id: number) {
    return this.http.delete(`${'http://localhost:4000'}/users/${id}`);
}
}
