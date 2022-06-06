import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cost } from '../despesa/despesa.component.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private financesUrl: string;

  constructor(private http: HttpClient) {
    this.financesUrl = 'http://localhost:8080/finances/';
  }

  public cost(year: number, month: number) {
    return this.http.get<Cost[]>(this.financesUrl + year + '/' + month );
  }
}

