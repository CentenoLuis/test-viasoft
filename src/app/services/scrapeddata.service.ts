import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Datah } from '../../data-mock';

@Injectable({
  providedIn: 'root',
})
export class ScrapeddataService {
  _url = 'http://localhost:9000/api/storeddata';
  constructor(private http: HttpClient) {
    console.log('scrapeddata works!');
  }
  loadData(): Observable<Datah[]> {
    let headers = new HttpHeaders().set('Type-Content', 'aplication/json');
    return this.http.get<Datah[]>(this._url, { headers });
  }
}
