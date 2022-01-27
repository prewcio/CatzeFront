import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {RegulaminComponent } from './regulamin/regulamin.component';
import {DashboardComponent } from './dashboard/dashboard.component';
import {MapaComponent } from './mapa/mapa.component';
import {StatystykiComponent } from './statystyki/statystyki.component';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NaviComponent } from './navi/navi.component';
import {LoadingComponent } from './loading/loading.component';
import {LoginComponent } from './login/login.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule } from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogContent, MatDialogModule} from "@angular/material/dialog";

// import {StatsService} from "./stats.service";

@NgModule({
  declarations: [
    AppComponent,
    RegulaminComponent,
    DashboardComponent,
    MapaComponent,
    StatystykiComponent,
    NaviComponent,
    LoadingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
