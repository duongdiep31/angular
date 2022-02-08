import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register, Signin } from '../model';
import { httpOptions } from './instance';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  register(data: Object):Observable<Register[]>{
        let url = "http://localhost:3001/register"
        
    return this.httpClient.post<Register[]>(url,data, httpOptions).pipe()
  }
  login(data: Object): Observable<Signin[]>{
    let url = "http://localhost:3001/signin"
    return this.httpClient.post<Signin[]>(url,data ,httpOptions).pipe()
  }
  getAll(): Observable<Signin[]>{
    let url = "http://localhost:3001/users"
    return this.httpClient.get<Signin[]>(url ,httpOptions).pipe()
  }

}
