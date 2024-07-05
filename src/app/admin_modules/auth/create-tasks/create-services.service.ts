import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envirionments } from '../../../../assets/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CreateServicesService {

  constructor(private http: HttpClient) { }

  create(model: any): Observable<any> {
    return this.http.post(envirionments.baseApi + '/tasks/add-task', model)
  }
}
