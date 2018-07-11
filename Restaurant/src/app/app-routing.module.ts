import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { SucursalComponent } from './view/sucursal/sucursal.component';
import { ConfiguracionComponent } from './view/configuracion/configuracion.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'sucursal', component: SucursalComponent},
  {path: 'configuracion', component: ConfiguracionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [InicioComponent, SucursalComponent, ConfiguracionComponent];
