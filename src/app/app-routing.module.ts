import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegulaminComponent} from "./regulamin/regulamin.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StatystykiComponent} from "./statystyki/statystyki.component";
import {MapaComponent} from "./mapa/mapa.component";
import {NaviComponent} from "./navi/navi.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'regulamin', component: RegulaminComponent },
  { path: 'statystyki', component: StatystykiComponent},
  { path: 'mapa', component: MapaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'invite/:nickname', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
