import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private authSuccess(datos:string){
    localStorage.setItem('datos',datos);
  }

  public verifylogged(): boolean {
    const token = localStorage.getItem('datos');
    return !!token;
  }

  public logout():void{
    localStorage.removeItem('datos');
    this.router.navigate[('/login')];
  }
}
