// import { Injectable } from '@angular/core';
// import { environment } from '../environments/environment';
// import {HttpHeaders, HttpClient, HttpParams, HttpEvent} from '@angular/common/http';
// import { RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
//
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
// import { catchError } from 'rxjs/operators/catchError';
//
// @Injectable()
// export class ApiService {
//
//   constructor(
//     private http: HttpClient
//   ) { }
//   // private formatErrors(error: any){
//   //   return new ErrorObservable(error.error);
//   // }
//   get(path: string, data= {}):Observable<any> {
//     return this.http.get(`${environment.api_url}${path}`,{params:data})
//       .pipe(catchError(this.formatErrors));
//   }
//   put(path: string, body: Object = {}): Observable<any> {
//     return this.http.put(
//       `${environment.api_url}${path}`,
//       JSON.stringify(body)
//     ).pipe(catchError(this.formatErrors));
//   }
//   patch(path: string, body: Object = {}): Observable<any> {
//     return this.http.patch(
//       `${environment.api_url}${path}`,
//       JSON.stringify(body)
//     ).pipe(catchError(this.formatErrors));
//   }
//   post(path: string, body: Object = {}): Observable<any> {
//     return this.http.post(
//       `${environment.api_url}${path}`,
//       JSON.stringify(body)
//     ).pipe(catchError(this.formatErrors));
//   }
//   delete(path: string, data: any): Observable<any> {
//
//     const requestOptions = {
//       params: new HttpParams(),
//       body: data
//     };
//
//     return this.http.delete(
//       `${environment.api_url}${path}`, requestOptions
//     ).pipe(catchError(this.formatErrors));
//   }
// }
