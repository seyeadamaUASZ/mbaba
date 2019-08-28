import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  host = '//localhost:8080/';
  constructor(private http: HttpClient) { }

  getEquipe(): Observable<any> {
    return this.http.get(this.host + 'equipes');
  }
  // save Zone
  saveEquipe(equipe: any): Observable<any> {
    return this.http.post(this.host + 'equipes', equipe);
  }

  // delete zone

  deleteEquipe(id: any): Observable<any> {
    return this.http.delete(this.host + 'equipes/' + id);
  }

}

