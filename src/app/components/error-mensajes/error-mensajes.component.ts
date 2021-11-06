import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-mensajes',
  templateUrl: './error-mensajes.component.html',
  styleUrls: ['./error-mensajes.component.scss'],
})
export class ErrorMensajesComponent implements OnInit {

  @Input() message: string;
  @Input() field: FormGroup;
  @Input() error: string;

  constructor() { }

  ngOnInit() {}


  MostrarComponente(){
    //*ngIf="form.get('email').touched && form.get('email').errors?.required"
    if (this.field.touched && this.field.errors?.[this.error]){
      return true;
    } 
    return false;
  }
}
