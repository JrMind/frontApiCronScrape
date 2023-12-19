import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CronRequest } from '../models/cron.request';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CronService {
  private _serviceUrl: string = environment.cronapiurl;

  constructor(private _http$: HttpClient) { }

  public createCron(cronReq: CronRequest): Observable<any> {
    const req = JSON.stringify(cronReq);
    const options = { headers: new HttpHeaders(), params: new HttpParams()};
    options.headers = new HttpHeaders(
        {
            'Content-Type': 'application/json',
        });
    options.params = new HttpParams();
    return this._http$.post<string>(this._serviceUrl, req, options)
      .pipe(
        map((resp:any) => {
          console.log(resp);
          return resp;
        })
      );

  }
}
