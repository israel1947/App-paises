import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Country } from '../interfaces/paises.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

   //url que se usara en la consulata http
  private apiUrl:string='https://restcountries.eu/rest/v2';


  //contrustor de http para poder acceder a ellos y poder hacer la consulta
  constructor(private http: HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{ //country hace referencia a la respuesta que devuelve el navegador en su busqueda, que en este caso como se ve aqi, es un arreglo de un pais

    //hacer la culsulta http
    const url= `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url)
  }

  buscarCapital(termino:string):Observable<Country[]>{

    const apiUrl =`${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(apiUrl)
  }

  getPaisByCode(id:string):Observable<Country>{
    const url= `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>( url );
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url= `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url)
  }


}

