import { Component, Output, EventEmitter,OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit  {
  

  @Input() placeholder:string='';//esto es para reutilizar los metodos, es decir que se puede usar en cualquier otro archivo de la app
 

 @Output () onEnter:EventEmitter<string> = new EventEmitter();  //onEnter hace la simulacio de que es un evento y EventEmitter hace referencia al tipo que se va a emitir en este caso sera de tipo string, pero puede ser(number,string,booblean)

 @Output () onDebounce:EventEmitter<string> = new EventEmitter();

 deboucer:Subject<string>=new Subject();//son un tipo de Observable especial que nos permiten realizar diversas tareas como el multicasting, es decir, compartir exactamente el mismo stream de datos con todas las subscripciones sin preocuparnos del tipo de Observable que estamos manejando.

 termino:string='';

 ngOnInit(){  //este se dispara solo una vez, y es cuando el componente ya esta inicializado

  this.deboucer
  .pipe( debounceTime(300) )//emite el valor cada 300 milesimas de segundos despues de que la persona deja de escribir
  .subscribe( valor =>{
    this.onDebounce.emit( valor );
  } )
}

  buscar(){
    this.onEnter.emit(this.termino);//emite el valor que se escucha en el padre, es decir el htmly cuando el html escucha, dispara la funcion de buscar
  }

  teclaPresionada(event:any){
    //emitir un valor llamando deboucer es decir que cada vez que se precione una tecla mandara a llmar a deboucer que esta suscrito arriba en el ngOnInit
    this.deboucer.next( this.termino );
  }

}
