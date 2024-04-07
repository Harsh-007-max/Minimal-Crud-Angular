import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class ApiEmployeesService {
  apiURL: string = 'https://node-js-server-blond.vercel.app';
  constructor(private _http: HttpClient) { }
  getAllEmployees() {
    return this._http.get(this.apiURL);
  }
  getById(id: Number) {
    return this._http.get(`${this.apiURL}/${id}`);
  }
  updateEmployee(data: Employee) {
    return this._http.put(`${this.apiURL}/${data.EmployeeID}`, data);
  }
  insertEmployee(data: any) {
    return this._http.post(`${this.apiURL}`, data);
  }
  deleteEmployee(id: Number) {
    return this._http.delete(`${this.apiURL}/${id}`);
  }
}
