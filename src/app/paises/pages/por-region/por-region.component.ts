import { Component } from '@angular/core';

import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button{
      margin-right:5px;
    }
 `
  ]
})
export class PorRegionComponent  {

  regiones:string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActivada='';
  paises:Country[]=[];

  constructor(private paisServise:PaisService) { }

  getClassCss(region:string){
    return (region ===this.regionActivada) ? 'btn btn-primary': ' btn btn-outline-primary';
  }

 activaRegion(region:string){
  this.regionActivada=region; //region activada, es igual a la region que se recibe en la busqueda

  //hacer el llmado al servicio para treaer los paises por esa region
  this.paisServise.buscarRegion(region)
  .subscribe(paises => this.paises=paises);
 }
 
}
