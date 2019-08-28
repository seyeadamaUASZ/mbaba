import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StadeService {
  host = '//localhost:8080/';
  constructor(private http: HttpClient) { }

  getStade(): Observable<any> {
    return this.http.get(this.host + 'stades');
  }
  // save Zone
  saveStade(stade: any): Observable<any> {
    return this.http.post(this.host + 'stades', stade);
  }

  // delete zone

  deleteStade(id: any): Observable<any> {
    return this.http.delete(this.host + 'stades/' + id);
  }

}

