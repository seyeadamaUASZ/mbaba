import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalServiceService {
  host = '//localhost:8080/';
  constructor(private http: HttpClient) { }

  loadTerminal(): Observable<any> {
    return this.http.get(this.host + 'terminals');
  }

  saveTerminal(terminal: any): Observable<any> {
    return this.http.post(this.host + 'terminals', terminal);
  }
  deleteTerminal(id: any): Observable<any> {
    return this.http.delete(this.host + 'terminals/' + id);
  }
}
