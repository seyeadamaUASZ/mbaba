import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  host = '//localhost:8080/';
  constructor(private http: HttpClient) { }

  getZone(): Observable<any> {
    return this.http.get(this.host + 'zones');
  }
  // save Zone
 saveZone(zone: any): Observable<any> {
  return this.http.post(this.host + 'zones', zone);
 }

 // delete zone

 deleteZone(id: any): Observable<any> {
    return this.http.delete(this.host + 'zones/' + id);
 }

}

