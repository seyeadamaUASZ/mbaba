import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Odcav } from 'src/model/model.odcav';


@Injectable({
  providedIn: 'root'
})
export class OdcavService {
  public host = '//localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllOdcav(): Observable<any> {
    return this.http.get(this.host + 'odcavs');
  }
  save(od: any): Observable<any> {
    let result: Observable<Object>;
      result = this.http.post(this.host + 'odcavs', od);

    return result;
  }

  update(odcav: Odcav) {
     return this.http.put(this.host + 'odcavs/' + odcav.id, odcav);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.host + 'odcavs/' + id);
  }
}
