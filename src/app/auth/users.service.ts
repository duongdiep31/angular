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
}
