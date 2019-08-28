import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvenementserviceService {
  host = '//localhost:8080/';
  constructor(private http: HttpClient) { }

  loadEvenement(): Observable<any> {
    return this.http.get(this.host + 'evenements');
  }

  saveEvenement(evenement: any): Observable<any> {
    return this.http.post(this.host + 'evenements', evenement);
  }

  deleteEvenement(id: any): Observable<any> {
     return this.http.delete(this.host + 'evenements/' + id);
  }

}
