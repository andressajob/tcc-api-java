import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Income } from './renda.component.model';

@Injectable({
  providedIn: 'root'
})
export class RendaService {
  private editIncomeUrl: string;

  constructor(private http: HttpClient) {
    this.editIncomeUrl = 'http://localhost:8080/editIncome';
  }

  public editIncome(income: Income) {
    return this.http.put<Income>(this.editIncomeUrl, income);
  }
}


