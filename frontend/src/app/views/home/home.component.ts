import { HeaderService } from './../../components/template/header/header.service';
import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DespesaComponent } from '../despesa/despesa.component';


export interface PeriodicElement {
  descricaoDespesa: string;
  nomeDespesa: string;
  valorDespesa: number;
  actions: string;
}

interface Mes {
  value: string;
  viewValue: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {nomeDespesa: 'Marisa', descricaoDespesa: 'descrição', valorDespesa: 20, actions: ''},
  {nomeDespesa: 'Renner', descricaoDespesa: 'descrição', valorDespesa: 25, actions: ''},
  {nomeDespesa: 'Amazon', descricaoDespesa: 'descrição', valorDespesa: 25, actions: ''},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  EDIT_DESPESA: string =  'Edit Despesa'
  ADICIONAR_DESPESA: string = 'Adicionar Despesa'
  

  displayedColumns: string[] = ['nomeDespesa', 'descricaoDespesa', 'valorDespesa', 'actions'];
  dataSource = ELEMENT_DATA;
  mes: string
  valorRestanteDoMes: number;
  valorTotalDisponivel: number = 2000;
  selectedValue: string = 'janeiro';
  titleOpenDespesaDialog: string;

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

  constructor(
    private headerService: HeaderService,
    public dialog: MatDialog
    ) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
    this.updateSelectedValue();
  }

  updateSelectedValue(){

    if (this.selectedValue) {
    var mesAtual = this.meses.find(x => x.value === this.selectedValue);  
    this.mes = mesAtual.viewValue;
    }
  }

  calcularValorRestanteDoMes() {
    var totalDespesas = ELEMENT_DATA.reduce( function(a, b){
      return a + b['valorDespesa'];
    }, 0);
    this.valorRestanteDoMes = this.valorTotalDisponivel - totalDespesas;
    return this.valorRestanteDoMes;
  }

  openDespesaDialog() {
    this.dialog.open(DespesaComponent);
  }

}
