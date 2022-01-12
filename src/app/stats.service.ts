// import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs/Observable';
//
// import {ApiService} from './api.service';
// import 'rxjs/add/operator/map';
//
// import * as moment from 'moment';
// @Injectable()
// export class StatsService {
//
//   constructor(
//     private apiService: ApiService
//   ) {
//   }
//   getKills(): Observable<any> {
//     return this.apiService.get('/stats/kills');
//   }
//   getDeaths(): Observable<any> {
//     return this.apiService.get('/stats/deaths');
//   }
//   getPlayTime(): Observable<any> {
//     return this.apiService.get('/stats/playtime');
//   }
//   getMinedStone(): Observable<any> {
//     return this.apiService.get('/stats/stonemined');
//   }
//   getMobsKilled(): Observable<any> {
//     return this.apiService.get('/stats/mobskills');
//   }
//   getVisitsLink(nick: String): Observable<any> {
//     return this.apiService.get(`/invite/${nick}`);
//   }
// }
