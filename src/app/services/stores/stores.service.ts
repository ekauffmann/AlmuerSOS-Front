import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Store } from '../../classes/store';

@Injectable()
export class StoresService {

  private apiUrl = environment.API_BASE_URL + '/stores/';

  constructor (private http: Http) {}

  getStores (): Observable<Store[]> {
    return this.http.get(this.apiUrl)
      .map(this.extractDataArray)
      .catch(this.handleError);
  }

  getStore (storeId): Observable<Store> {
    return this.http.get(this.apiUrl + storeId + '/')
      .map(this.extractDataObject)
      .catch(this.handleError);
  }

  private extractDataArray (res: Response) {
    let body = res.json();
    return body || [];
  }

  private extractDataObject (res: Response) {
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
