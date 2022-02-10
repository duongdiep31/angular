import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../model';
import { api, httpOptions } from './instance';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient:HttpClient) { }
  getAll(): Observable<People[]>{
    let url = "http://localhost:8000/api/people"
    return this.httpClient.get<People[]>(url ,httpOptions).pipe()
  }
  add(value: object):Observable<People[]>{
    return this.httpClient.post<People[]>(api('people'),value, httpOptions).pipe()
  }
  update(value:object, id: any): Observable<People[]>{
    return this.httpClient.patch<People[]>(api(`people/${id}`), value, httpOptions ).pipe()
  }
  remove( id: any): Observable<People[]>{
    return this.httpClient.delete<People[]>(api(`people/${id}`), httpOptions ).pipe()
  }
  find( id: any): Observable<People[]>{
    return this.httpClient.get<People[]>(api(`people/${id}`), httpOptions ).pipe()
  }
}
