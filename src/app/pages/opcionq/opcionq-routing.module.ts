import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteDosComponent } from 'src/app/components/componente-dos/componente-dos.component';
import { ComponenteUnoComponent } from 'src/app/components/componente-uno/componente-uno.component';

import { OpcionqPage } from './opcionq.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionqPage,
    children:[
      {
        path:'Horario',
        component: ComponenteUnoComponent
      },
      {
        path:'Asistenci',
        component: ComponenteDosComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionqPageRoutingModule {}
