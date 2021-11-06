import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { IUsuarios } from '../interfaces/iusuarios';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  datos: IUsuarios[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
    this.cargarDatos();
  }
  async cargarDatos() {
    const misDatos = await this.storage.get('datos');
    if (misDatos){
      this.datos = misDatos;
    }
  }

  guardardatos(email:string, password:string){
    const existe= this.datos.find(c=>c.strEmail===email);
    if (!existe){
      this.datos.unshift({strEmail:email,strContraseña:password});
      this._storage.set('datos',this.datos);
    }else{
      this._storage.set('datos',this.datos);
    }

  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }
}
