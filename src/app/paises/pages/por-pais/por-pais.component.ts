import { Component} from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  
  li{
    margin-left:15px;
    width:98%;
    cursor:pointer;
  }
  a{
    text-decoration:none;
  }
  `
  ]
})
export class PorPaisComponent {
  

  //hace referencia a lo que se escribe en la barra de busquedas en este caso, a los paises que se buscan
  termino:string='';
  ConError:boolean=false;

  //llenar la tabla de paises, es decir mostrar los resultados en el DOM
  paises:Country[]=[];

  //crear sugerencias de paises en la barra de busqueda
  paisesSugeridos:Country[]=[];

  //ocultarSugerecias al hacer clic o presionar enter
  ocultarSugerecias:boolean=false;

  //constructor de los servicios para poder acceder a ellos y a la respectiva consulta http realizada desde ese archivo
  constructor(private paisServise:PaisService) { }

  //resultados de la conslta http realizada por el usuario
   buscar(termino:string){
     
    this.ConError=false;// manejo de error cuando todo esta correcto
    this.termino=termino;
    this.ocultarSugerecias=false;

    this.paisServise.buscarPais(this.termino)
    .subscribe( respuestaPaises=>{
      console.log(respuestaPaises);
      this.paises=respuestaPaises;//este es el arreglo que se obtiene de la busqueda que se hace en la app, la cual permitira mostrarlo en pantalla

      // manejo de errores en caso de no encontrar ningua busqueda
    },(error:boolean)=>{
      this.ConError=true;
      //erro cuando los paises no se encuentran o no son los que se deberian de mostrar
      this.paises=[];
    });
  }

  sugerencias(termino:string){

    this.ConError=false;
    this.ocultarSugerecias=true;//al hacer enter oculta la barra de sugerencias

    //crear sugerencias de busqueda en la barra de busquedas
    this.paisServise.buscarPais(termino)
      .subscribe(paises=>this.paisesSugeridos=paises.splice(0.5),

      (error)=>this.paisesSugeridos=[]//cuando haya un error en la busqueda, se ocultara la barra de sugerencias(cuando la busqueda no exista)
      );
  }
  buscarSugerido(termino:string){
    this.buscar(termino);
  }
}
