

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envirionments } from '../../../../assets/environments/environment';
import { Login } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private http: HttpClient) { }

  login(model: Login): Observable<any> {
    return this.http.post(envirionments.baseApi + "/auth/login", model);
  }
  register(model: Login): Observable<any> {
    return this.http.post(envirionments.baseApi + "/auth/createAccount", model);
  }




  getAllTasks(filter:any): Observable<any> {
    let params= new HttpParams()
    Object.entries(filter).forEach(([key,value]:any)=>{
      if(value){
        params=params.append(key,value)
      }
    })
    return this.http.get(envirionments.baseApi + '/tasks/all-tasks' , {params})
  }


  

  deleteTasks(id:any):Observable<any>{
    return this.http.delete(envirionments.baseApi+`/delete-task/${id}`)
  }

  update(model:any , id:any){
    return this.http.put(envirionments.baseApi + `/edit-task/`+ id,model)
  }

  getAllUser(): Observable<any> {
    return this.http.get(envirionments.baseApi + '/auth/users')
  }

}
