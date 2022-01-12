import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapaComponent } from './mapa/mapa.component';
import { StatystykiComponent } from './statystyki/statystyki.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {StatsService} from "./stats.service";

@NgModule({
  declarations: [
    AppComponent,
    RegulaminComponent,
    DashboardComponent,
    MapaComponent,
    StatystykiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
