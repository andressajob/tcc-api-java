import {Component, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

/**
 * @title Basic snack-bar
 */

 @Injectable({
    providedIn: 'root'
  })
export class MessageBarService {
  constructor(private _snackBar: MatSnackBar) {}

  success(message: string, action: string= 'ok') {
    this._snackBar.open(message, action);
  }

  error(message: string, action: string= 'ok') {
    this._snackBar.open(message, action);
  }
}