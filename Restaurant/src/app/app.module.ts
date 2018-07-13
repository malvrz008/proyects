import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SucursalComponent } from './view/sucursal/sucursal.component';
import { ConfiguracionComponent } from './view/configuracion/configuracion.component';
import { CategoriaInsumoComponent } from './view/categoria-insumo/categoria-insumo.component';
import { InsumoComponent } from './view/insumo/insumo.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SucursalComponent,
    ConfiguracionComponent,
    CategoriaInsumoComponent,
    InsumoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
