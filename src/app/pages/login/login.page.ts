import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup; 
  email:string;
  password:string;


  constructor(private router: Router, private formBuilder: FormBuilder, public bdLocal:BdLocalService, public navCtrl: NavController) {}

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }


  login() {

    let navigationextras: NavigationExtras={
      state: {email: this.email}
    }
    this.router.navigate(['/home'], navigationextras)
    this.bdLocal.guardardatos(this.email,this.password);

  }

  guardar(){
    this.bdLocal.guardardatos(this.email,this.password);
  }

 


}

