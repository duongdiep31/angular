import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model';
import { api, httpOptions } from './instance';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(api('user'), httpOptions).pipe()
  }
  find(id:any):Observable<User[]>{
    return this.httpClient.get<User[]>(api(`user/${id}`), httpOptions).pipe()
  }
  change(id:any, data: any):Observable<User[]>{
    return this.httpClient.patch<User[]>(api(`user/${id}`), data, httpOptions).pipe()
  }
  remove(id:any):Observable<User[]>{
    return this.httpClient.delete<User[]>(api(`user/${id}`), httpOptions).pipe()
  }
}
