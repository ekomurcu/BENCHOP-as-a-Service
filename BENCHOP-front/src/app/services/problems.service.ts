import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProblemsService {
  private _url =
    'https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=f1b45755-b659-48b9-b775-3e334772c2d4';

  constructor(private http: HttpClient) {}

  getProblemResult(parameters): Observable<Object> {
    return of(this.http.get(this._url + parameters));
  }

  getAllProblemsResult(): Observable<Object> {
    return of(this.http.get(this._url));
  }
}
