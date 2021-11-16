import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  email: any;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {

    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.email=this.router.getCurrentNavigation().extras.state.email;
        console.log(this.email);
      }
    });
   }
  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  
}
