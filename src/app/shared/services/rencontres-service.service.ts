import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RencontresServiceService {
  host = '//localhost:8080/';
  constructor(private http: HttpClient) { }

  loadRencontres(): Observable<any> {
      return this.http.get(this.host + 'rencontres');
  }
  saveRencontre(rencontre: any): Observable<any> {
     return this.http.post(this.host + 'rencontres', rencontre);
  }

  deleteRencontre(id: any): Observable<any> {
    return this.http.delete(this.host + 'rencontres/' + id);
  }
}
