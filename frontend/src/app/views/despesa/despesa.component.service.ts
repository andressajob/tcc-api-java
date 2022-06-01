import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cost } from '../despesa/despesa.component.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private addCostUrl: string;
  private editCostUrl: string;
  private deleteCostUrl: string;

  constructor(private http: HttpClient) {
    this.addCostUrl = 'http://localhost:8080/addCost';
    this.editCostUrl = 'http://localhost:8080/editCost';
    this.deleteCostUrl = 'http://localhost:8080/deleteCost/';
  }
  public addCost(cost: Cost) {
    return this.http.post<Cost>(this.addCostUrl, cost);
  }
  
  public editCost(cost: Cost) {
    return this.http.put<Cost>(this.editCostUrl, cost);
  }

  public deleteCost(id: number) {
    return this.http.delete<boolean>(this.deleteCostUrl + id);
  }
}