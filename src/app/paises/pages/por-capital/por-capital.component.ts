import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino:string='';
  ConError:boolean=false;
  
  paises:Country[]=[];


  constructor(private paisServise:PaisService){}

  buscar(termino:string){
    this.ConError=false;// manejo de error cuando todo esta correcto
    this.termino=termino;

    this.paisServise.buscarCapital(this.termino)
    .subscribe(paises =>{
      this.paises=paises;
  
    },(error:boolean)=>{
      this.ConError=true;

      this.paises=[];
    });
  }
}
