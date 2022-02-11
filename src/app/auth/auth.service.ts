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
   isAuthenticated(){
    let token = localStorage.getItem('currentUser');
    if(token != undefined && token.length > 0){
      return true;
    }
    return false;
  }
  register(data: Object):Observable<Register[]>{
        let url = "http://localhost:8000/api/register"
        
    return this.httpClient.post<Register[]>(url,data, httpOptions).pipe()
  }
  login(data: Object): Observable<Signin[]>{
    let url = "http://localhost:8000/api/signin"
    return this.httpClient.post<Signin[]>(url,data ,httpOptions).pipe()
  }


}
