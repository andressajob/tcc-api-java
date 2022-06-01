import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Cost } from './despesa.component.model';
import { HomeComponent } from '../home/home.component';


export interface DialogData {
  title: string;
  button: string;
  cost : Cost;
}

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent{

  action:string;
  local_data:any;
  costReset : Cost;
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) {
      this.local_data = {...data, cost:{...data.cost}};
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  doAction(){
    this.dialogRef.close(this.local_data);
  }
}
