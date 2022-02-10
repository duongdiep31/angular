import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../model';
import { api, httpOptions } from './instance';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  constructor(private httpClient:HttpClient) { }
  getAll(): Observable<Area[]>{
    let url = "http://localhost:8000/api/area"
    return this.httpClient.get<Area[]>(url ,httpOptions).pipe()
  }
  add(value: object):Observable<Area[]>{
    return this.httpClient.post<Area[]>(api('area'),value, httpOptions).pipe()
  }
  update(value:object, id: any): Observable<Area[]>{
    return this.httpClient.patch<Area[]>(api(`area/${id}`), value, httpOptions ).pipe()
  }
  remove( id: any): Observable<Area[]>{
    return this.httpClient.delete<Area[]>(api(`area/${id}`), httpOptions ).pipe()
  }
}
