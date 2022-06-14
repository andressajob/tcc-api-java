import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {MatDialog} from '@angular/material/dialog';
import {FormControl, Validators, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { LoginService } from '../login/login..component.service';
import { User } from '../login/login.component.model';
import { MessageBarService } from 'src/app/components/template/message-bar/message-bar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  hide = true;
  color: ThemePalette = 'primary';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private messageBarService: MessageBarService) { }


  userGroup = new FormGroup({

  emailFormControl : new FormControl('', [
    Validators.required,
    Validators.email
  ]),
  
  userNameFormControl : new FormControl('', [
    Validators.required
  ]),
  
  passordFormControl : new FormControl('', [
    Validators.required
  ]),

  });


  ngOnInit(): void {
  }

  saveUser() {
    if (!this.userGroup.valid) {
      return;
    }
    let user: User  = {
      email: this.userGroup.get('emailFormControl').value,
      username: this.userGroup.get('userNameFormControl').value,
      password: this.userGroup.get('passordFormControl').value,
      enabled: true
    }
    this.loginService.save(user).subscribe(data => {
      if (data) {
        this.router.navigate(['/home']);
      } else {
        this.messageBarService.error('Erro ao adicionar novo usuário', 'Ok');
      }
      
    });
  }

}
