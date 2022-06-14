import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './login.component.model';
import { Auth } from './auth.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usersUrl: string;
  private usersAddUrl: string;
  private authUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
    this.usersAddUrl = 'http://localhost:8080/addUser';
    this.authUrl = 'http://localhost:8080/oauth/token';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersAddUrl, user);
  }

  public authentication(auth: Auth) {
    return this.http.post<Auth>(this.authUrl, auth);
  }
}


