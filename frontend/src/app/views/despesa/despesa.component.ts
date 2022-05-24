import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {MatDialog} from '@angular/material/dialog';
import { DespesaService } from './despesa.component.service';
import { Cost } from './despesa.component.model';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {
  
  cost: Cost;
  title: string;
  constructor(private router: Router, 
    private headerService: HeaderService,
    private despesaService: DespesaService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
    this.despesaService.addCost(this.cost).subscribe(data => {
      console.log(data);
    });
  }

}
