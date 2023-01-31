import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { ZommRangeComponent } from './pages/zomm-range/zomm-range.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';


//lazyload
const routes: Routes = [
{
  path: '',
  children:[
    {path:'fullscreen', component: FullScreenComponent},
    {path:'zoom-range', component: ZommRangeComponent},
    {path:'marcadores', component: MarcadoresComponent},
    {path:'propiedades', component: PropiedadesComponent},
    {path:'**', redirectTo: 'fullscreen'}
  ]
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
