import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { tap }               from 'rxjs/operators';




import { PaisService } from '../../services/pais.service';
import { Country, Language } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

pais!:Country;

constructor(private rutaActivada : ActivatedRoute,
 private paisService:PaisService) { }//es antes de que se inicialize el componente


  //es cuando el componente ya esta inicializado
  ngOnInit(): void { 

//suscribirse a los observables que permitan hacer el cambio de codigo de cada país
this.rutaActivada.params
.subscribe(({id})=>{
  console.log(id)
  tap(console.log)//forma corta de hacer una impresion en la consola

//traer la informacion del pais
this.paisService.getPaisByCode(id)
.subscribe(pais=>{
  this.pais=pais;
  console.log(pais);
})

})  //los params permiten pasar los parámetros opcionales a través de cualquier ruta en la aplicación

  }

}
