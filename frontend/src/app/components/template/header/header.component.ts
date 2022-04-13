import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { RendaComponent } from './../../../views/renda/renda.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  get title(): string {
    return "Alícia Tanski";
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    console.log(this.headerService.headerData.routeUrl);
    return this.headerService.headerData.routeUrl
  }
  
  openRendaDialog() {
    this.dialog.open(RendaComponent);
  }
}
