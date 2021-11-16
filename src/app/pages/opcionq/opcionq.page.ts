import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opcionq',
  templateUrl: './opcionq.page.html',
  styleUrls: ['./opcionq.page.scss'],
})
export class OpcionqPage implements OnInit {


  constructor(private router: Router) {
    this.router.navigate(['opcionq/Horario'])
  }

  segmentChanged(event: any){
    console.log(event);
    let direction=event.detail.value
    this.router.navigate(['opcionq/'+direction]) 
  }


  ngOnInit() {
  }

}
