import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './login.component.model';
import { Auth } from './auth.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersUrl: string;
  private usersAddUrl: string;
  private authUrl: string;
  public token: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
    this.usersAddUrl = 'http://localhost:8080/addUser';
    this.authUrl = 'http://localhost:8080/oauth/token';
    this.token = localStorage.getItem('token');
  }

  public authentication(auth: Auth) {
    return this.http.post<any>(this.authUrl, auth).subscribe(token => {
        this.token = token;
        localStorage.setItem('token', token);
    });
  }
}

