import { HeaderService } from './../../components/template/header/header.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import { LoginService } from './login..component.service';
import { User } from './login.component.model';


export interface PeriodicElement {
  descricaoDespesa: string;
  nomeDespesa: number;
  valorDespesa: number;
  actions: string;
}

interface Mes {
  value: string;
  viewValue: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {nomeDespesa: 1, descricaoDespesa: 'Hydrogen', valorDespesa: 20, actions: 'H'},
  {nomeDespesa: 2, descricaoDespesa: 'Helium', valorDespesa: 25, actions: 'He'},
  {nomeDespesa: 3, descricaoDespesa: 'Lithium', valorDespesa: 25, actions: 'Li'},
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  EDIT_DESPESA: string =  'Edit Despesa'
  ADICIONAR_DESPESA: string = 'Adicionar Despesa'
  users: User[];

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
    public dialog: MatDialog,
    private loginService: LoginService
    ) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    this.loginService.findAll().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  openUserDialog() {
    this.dialog.open(UserComponent);
  }
}
