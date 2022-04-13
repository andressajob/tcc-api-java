import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {ThemePalette} from '@angular/material/core';

interface Mes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-renda',
  templateUrl: './renda.component.html',
  styleUrls: ['./renda.component.css']
})
export class RendaComponent implements OnInit {

  selectedValue: string; 
  color: ThemePalette = 'primary';
  meses: Mes[] = [
    {value: 'janeiro', viewValue: 'Janeiro'},
    {value: 'fevereiro', viewValue: 'Fevereiro'},
    {value: 'marco', viewValue: 'Março'},
    {value: 'abril', viewValue: 'Abril'},
    {value: 'junho', viewValue: 'Junho'},
    {value: 'julho', viewValue: 'Julho'},
    {value: 'agosto', viewValue: 'Agosto'},
    {value: 'setembro', viewValue: 'Setembro'},
    {value: 'outubro', viewValue: 'Outubro'},
    {value: 'novembro', viewValue: 'Novembro'},
    {value: 'dezembro', viewValue: 'Dezembro'},
  ];

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

}
