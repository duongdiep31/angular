import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model';
import { api, httpOptions } from './instance';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(api('projects'), httpOptions).pipe()
  }
  find(id: number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(api(`projects/${id}`), httpOptions).pipe()
  }
  add(value: object):Observable<IProduct[]>{
    return this.httpClient.post<IProduct[]>(api('projects'),value, httpOptions).pipe()
  }
  update(value:object, id: number): Observable<IProduct[]>{
    return this.httpClient.patch<IProduct[]>(api(`projects/${id}`), value, httpOptions ).pipe()
  }
  remove( id: number): Observable<IProduct[]>{
    return this.httpClient.delete<IProduct[]>(api(`projects/${id}`), httpOptions ).pipe()
  }
}
