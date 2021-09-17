import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  url = 'https://64d4-161-132-234-179.ngrok.io/student/C01-1';

  getStudent(): Observable<any> {
    return this.http.get<any>(this.url, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    });
  }

}
