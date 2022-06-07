import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cost } from '../despesa/despesa.component.model';
import { Income } from '../renda/renda.component.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private financesUrl: string;
  private incomeUrl: string;

  constructor(private http: HttpClient) {
    this.financesUrl = 'http://localhost:8080/finances/';
    this.incomeUrl = 'http://localhost:8080/income/';
  }

  public getCost(year: number, month: number) {
    return this.http.get<Cost[]>(this.financesUrl + year + '/' + month );
  }

  public getIncome(year: number, month: number) {
    return this.http.get<Income>(this.incomeUrl + year + '/' + month );
  }
}