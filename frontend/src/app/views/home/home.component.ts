import { HeaderService } from './../../components/template/header/header.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DespesaComponent } from '../despesa/despesa.component';
import { HomeService } from './home.component.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Cost } from '../despesa/despesa.component.model';

interface Mes {
  value: string;
  viewValue: string;
}

interface Ano {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  EDIT_DESPESA: string =  'Edit Despesa'
  ADICIONAR_DESPESA: string = 'Adicionar Despesa'
  costs: Cost[] = [];
  

  displayedColumns: string[] = ['nomeDespesa', 'descricaoDespesa', 'valorDespesa', 'actions'];
  dataSource: MatTableDataSource<Cost>;
  mes: string;
  ano: string;
  valorRestanteDoMes: number;
  valorTotalDisponivel: number = 2000;
  selectedValueMes: string = 'janeiro';
  selectedValueAno: string = '2022';
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

  anos: Ano[] = [
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
    {value: '2022', viewValue: '2022'},
  ];

  constructor(
    private headerService: HeaderService,
    public dialog: MatDialog,
    private homeService: HomeService
    ) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
    this.updateSelectedValueMes();
    this.updateSelectedValueAno();
    this.getCost();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateSelectedValueMes(){
    if (this.selectedValueMes) {
    var mesAtual = this.meses.find(x => x.value === this.selectedValueMes);
    this.mes = mesAtual.viewValue;
    }
  }

  updateSelectedValueAno(){
    if (this.selectedValueAno) {
    var anoAtual = this.anos.find(x => x.value === this.selectedValueAno);
    this.ano = anoAtual.viewValue;
    }
  }

  calcularValorRestanteDoMes() {
    // var totalDespesas = ELEMENT_DATA.reduce( function(a, b){
    //   return a + b['valorDespesa'];
    // }, 0);
    // this.valorRestanteDoMes = this.valorTotalDisponivel - totalDespesas;
    // return this.valorRestanteDoMes;
  }

  openDespesaDialog() {
    this.dialog.open(DespesaComponent);
  }

  getCost() {
    this.homeService.cost().subscribe(data => {
      this.costs = data;
      console.log(this.costs);
      
      this.dataSource = new MatTableDataSource(this.costs);
    });
  }

}
