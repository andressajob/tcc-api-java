import { HeaderService } from './../../components/template/header/header.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DespesaComponent } from '../despesa/despesa.component';
import { HomeService } from './home.component.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Cost } from '../despesa/despesa.component.model';
import { DespesaService } from '../despesa/despesa.component.service';
import { MessageBarService } from 'src/app/components/template/message-bar/message-bar.service';
import { Subject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

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
  cost: Cost;
  ano: string;
  valorRestanteDoMes: number;
  valorTotalDisponivel: number = 2000;
  selectedValueMes: string = '1';
  selectedValueAno: string = '2022';
  titleOpenDespesaDialog: string;

  meses: Mes[] = [
    {value: '1', viewValue: 'Janeiro'},
    {value: '2', viewValue: 'Fevereiro'},
    {value: '3', viewValue: 'Março'},
    {value: '4', viewValue: 'Abril'},
    {value: '5', viewValue: 'Maio'},
    {value: '6', viewValue: 'Junho'},
    {value: '7', viewValue: 'Julho'},
    {value: '8', viewValue: 'Agosto'},
    {value: '9', viewValue: 'Setembro'},
    {value: '10', viewValue: 'Outubro'},
    {value: '11', viewValue: 'Novembro'},
    {value: '12', viewValue: 'Dezembro'},
  ];

  anos: Ano[] = [
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
    {value: '2022', viewValue: '2022'},
  ];

  month = this.meses[(new Date()).getMonth()].viewValue;
  year = (new Date()).getFullYear();

  seletorsGroup = new FormGroup({
    monthForm: new FormControl(`${(new Date()).getMonth() + 1}`),
    yearForm: new FormControl(`${(new Date()).getFullYear()}`),
  });
  constructor(
    private headerService: HeaderService,
    private messageBarService: MessageBarService,
    public dialog: MatDialog,
    private homeService: HomeService,
    private despesaService: DespesaService
    ) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
    this.seletorsGroup.get('monthForm').valueChanges.subscribe(month => {
      this.month = this.meses.find(mes => mes.value === month).viewValue 
      this.getCost();
    });

    this.seletorsGroup.get('yearForm').valueChanges.subscribe(year => {
      this.year = year;
      this.getCost();
    });
      
    // this.updateSelectedValueMes();
    // this.updateSelectedValueAno();
   
  }

  ngAfterViewInit(){
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
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
      //this.mes.next(mesAtual.viewValue); 
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
    //this.mes.subscribe(month =>
    this.homeService.cost(this.seletorsGroup.get('yearForm').value, this.seletorsGroup.get('monthForm').value).subscribe(data => {
      this.costs = data;      
      this.dataSource = new MatTableDataSource(this.costs);
    });
  }

  
  editCost(cost){
    const dialogRef = this.dialog.open(DespesaComponent, {
      width: '450px',
      data: {title: 'Editar Renda', button: 'Salvar', cost},
    });

    dialogRef.afterClosed().subscribe(result => {      
      if (result) {
        this.despesaService.editCost(result.cost).subscribe(data => {   
          this.getCost();      
          this.messageBarService.success('Editado com sucesso', 'Ok');
        });
      }
    });
  }

  deleteCost(cost: Cost) {
    this.despesaService.deleteCost(cost.id).subscribe(data => {
      this.getCost();
      this.messageBarService.success('Deletado com sucesso', 'Ok');
    });
  }

  AddCost(cost) {    
    const dialogRef = this.dialog.open(DespesaComponent, {
      data: {title: 'Adicionar Despesa', button: 'Adicionar', cost},
    });

    dialogRef.afterClosed().subscribe(result => {
      // if (result) {
      //   this.despesaService.addCost({...result.cost, this.month, year}).subscribe(data => { 
      //     this.getCost();      
      //     this.messageBarService.success('Adicionado com sucesso', 'Ok');
      //   });
      // }
    });
  }

}
