import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { SucursalComponent } from './view/sucursal/sucursal.component';
import { ConfiguracionComponent } from './view/configuracion/configuracion.component';
import { CategoriaInsumoComponent } from './view/categoria-insumo/categoria-insumo.component';
import { InsumoComponent } from './view/insumo/insumo.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'sucursal', component: SucursalComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'categoriaInsumo', component: CategoriaInsumoComponent },
  { path: 'insumo', component: InsumoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [InicioComponent, SucursalComponent, ConfiguracionComponent, CategoriaInsumoComponent, InsumoComponent];
