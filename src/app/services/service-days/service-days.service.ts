import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ServiceDay } from '../../classes/service-day';

@Injectable()
export class ServiceDaysService {

  private apiUrl = environment.API_BASE_URL + '/stores/';

  constructor (private http: Http) {}

  getServiceDays (storeId): Observable<ServiceDay[]> {
    return this.http.get(this.apiUrl + storeId + '/service_days/?date=2016-12-14')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData (res: Response) {
    let body = res.json();
    return body || [];
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
