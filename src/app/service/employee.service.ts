import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private baseURL = 'http://localhost:8080/api/v1/employees';

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseURL);
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseURL + '/' + id);
  }

  create(employee: Employee): Observable<Object> {
    return this.http.post<Employee>(this.baseURL, employee);
  }

  // update
  updateById(id: number, employee: Employee): Observable<Object> {
    return this.http.put(this.baseURL + '/' + id, employee);
  }

  // delete
  deleteById(id: number): Observable<Object> {
    return this.http.delete(this.baseURL + '/' + id);
  }
}
