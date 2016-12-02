import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { Session } from '../classes/session';


@Injectable()
export class SessionService {

  private apiUrl = environment.API_BASE_URL + '/sessions/';

  constructor (private http: Http) {}

  getSession (): Observable<Session> {
    return this.http.get(this.apiUrl, {withCredentials: true})
      .map(this.extractData)
      .catch(this.handleError);
  }

  logout (): Observable<Session> {
    return this.http.delete(this.apiUrl, {withCredentials: true})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData (res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }

}
