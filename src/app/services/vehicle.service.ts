import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/v1/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(baseUrl);
  }

  get(id: any): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
