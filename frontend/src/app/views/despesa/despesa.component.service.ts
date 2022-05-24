import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cost } from '../despesa/despesa.component.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private financesUrl: string;

  constructor(private http: HttpClient) {
    this.financesUrl = 'http://localhost:8080/finances';
  }

  public addCost(cost: Cost) {
    return this.http.post(this.financesUrl, cost);
  }
}