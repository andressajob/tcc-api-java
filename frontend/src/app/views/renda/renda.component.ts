import { HeaderService } from '../../components/template/header/header.service';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router'
import {ThemePalette} from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { Income } from './renda.component.model';

interface Mes {
  value: string;
  viewValue: string;
}

export interface DialogData {
  title: string;
  button: string;
  income : Income;
}

@Component({
  selector: 'app-renda',
  templateUrl: './renda.component.html',
  styleUrls: ['./renda.component.css']
})
export class RendaComponent {

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
  
  action:string;
  local_data:any;
  incomeReset : Income;

  constructor(private router: Router, 
    private headerService: HeaderService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.local_data = {...data, income:{...data.income}};
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  doAction(){
    this.dialogRef.close(this.local_data);
  }

}