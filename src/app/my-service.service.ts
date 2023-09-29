import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Users } from './interfaces/users.interface';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  
   
  public baseUrl='http://localhost:3000'
   
  public check:boolean=false
  public checkfordetail:boolean=false


  constructor(private http:HttpClient) { }
 
  getList(page: number, pageSize:number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users?_page=${page}&_limit=${pageSize}`);
  }
  getfriendList():Observable<any>{

    return this.http.get<any>(this.baseUrl+ '/friends')
  }


  public idData(id:number){
    return this.http.get('http://localhost:3000/users/'+ id)
  }

  


}
