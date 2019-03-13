import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<any> {
    let url:string = '/reminders';

    return this.http.get<any>(url);
  }

  createNotifications(obj): Observable<any> {
    let url1:string = 'createreminders';
    return this.http.post(url1,obj);
  }
}
