import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeprocessService {

 

  constructor(private http: HttpClient) {}

  showData(): Observable<any> {
    return this.http.get('http://localhost:3000/employee');
  }

  addUser(emp: Employee): Observable<any> {
    return this.http.post('http://localhost:3000/employee', emp);
  }

}
