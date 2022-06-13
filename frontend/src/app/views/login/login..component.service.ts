import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './login.component.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usersUrl: string;
  private usersAddUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
    this.usersAddUrl = 'http://localhost:8080/addUser';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersAddUrl, user);
  }
}


