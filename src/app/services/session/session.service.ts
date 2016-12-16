import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';
import { User } from '../../classes/user';


@Injectable()
export class SessionService {

  private apiUrl = environment.API_BASE_URL + '/sessions/';

  private sessionUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor (private http: Http) {}

  getSessionSubject (): BehaviorSubject<User> {
    return this.sessionUser;
  }

  getSession (): void {
    this.http.get(this.apiUrl, {withCredentials: true})
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(user => {
        this.sessionUser.next(
          (Object.keys(user).length !== 0) ? user : null
        );
      });
  }

  logout (): void {
    this.http.delete(this.apiUrl, {withCredentials: true})
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(_ => {
        this.sessionUser.next(null);
      });
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
