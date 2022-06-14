import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Income } from './renda.component.model';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RendaService {
  private editIncomeUrl: string;

  constructor(private http: HttpClient,
    private authService: AuthService) {
    this.editIncomeUrl = 'http://localhost:8080/editIncome';
  }

  public editIncome(income: Income) {  
    const headers = new HttpHeaders({
    Authorization: 'bearer ' + this.authService.token
  })
    return this.http.put<Income>(this.editIncomeUrl, income, {headers});
  }
}