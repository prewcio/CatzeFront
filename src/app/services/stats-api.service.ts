import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StatsApiService {

  constructor(private http: HttpClient) { }


  getInvites(nickname: string,ip: string) {
    return this.http.post(environment.api_url + "/stats/invite/"+nickname, JSON.stringify({Nickname: nickname, IpAddress: ip}));
  }

  public getIPAddress(){
    return this.http.get('https://jsonip.com');
  }
}
