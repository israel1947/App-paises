import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from "./paises/pages/ver-pais/ver-pais.component";


const routes:Routes=[

    {
        
        path:'',//string  vacio simula el estar en el Url inicial, es decir la pagina que se muestra al inicio de la app
        component:PorPaisComponent,//hace referencia al componente que se quiere mosrtrar
        pathMatch:'full'//produce un resultado de ruta cuando los segmentos restantes, no coincidentes de la coincidencia de URL es la ruta del prefijo:significa que toda la ruta URL debe coincidir y es consumida por el algoritmo de coincidencia de ruta.
    },
    {
        path:'region', //se mostrara un componente cuando enhtren en /region
        component:PorRegionComponent,
    },
    {
        path:'capital',
        component:PorCapitalComponent,
    },
    {
        path:'pais/:id',
        component:VerPaisComponent,
    },
    {
        path:'**',//esto hace referencia a cualuier ruta que no sea ninguna de las que se encuentra arriba
        redirectTo:'',//esto hace referencia a que si la ruta no esta especificada o no es ninguna de las anteriormente especificadas, el usuario sera redirigido a la HOME
    }

];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)

    ],

    exports:[
        RouterModule
    ],
})
export class AppRoutingModule {}