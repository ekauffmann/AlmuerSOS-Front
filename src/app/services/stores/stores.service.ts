import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Store } from '../../classes/store';
import { User } from '../../classes/user';
import { Image } from '../../classes/image';


@Injectable()
export class StoresService {

  private static apiUrl = environment.API_BASE_URL + '/stores/';

  static isUserStoreManager(store: Store, user: User): boolean {
     if (user === null) {
      return false;
    }
    for (let manager of store.managers) {
      if (manager.id === user.id) {
        return true;
      }
    }
    return false;
  }

  static getStoreImagesUrl(store: Store): string {
    return this.apiUrl + store.id + '/images/';
  }

  constructor(private http: Http) {
  }

  getStores(): Observable<Store[]> {
    return this.http.get(StoresService.apiUrl)
      .map(this.extractDataArray)
      .catch(this.handleError);
  }

  getStore(storeId): Observable<Store> {
    return this.http.get(StoresService.apiUrl + storeId + '/')
      .map(this.extractDataObject)
      .catch(this.handleError);
  }

  saveStore(store: Store): Observable<any> {
    return this.http.put(StoresService.apiUrl + store.id + '/', store, {withCredentials: true})
      .map(this.extractDataObject)
      .catch(this.handleError);
  }

  getStoreImage(store: Store): Observable<Image> {
    return this.http.get(StoresService.apiUrl + store.id + '/images/', {withCredentials: true})
      .map(this.extractDataArrayFirst)
      .catch(this.handleError);
  }

  saveStoreImage(store: Store, image: Image): Observable<Image> {
    return this.http.post(StoresService.apiUrl + store.id + '/images/', {store: store.id, file: image.file}, {withCredentials: true})
      .map(this.extractDataObject)
      .catch(this.handleError);
  }

  private extractDataArray(res: Response) {
    let body = res.json();
    return body || [];
  }

  private extractDataArrayFirst(res: Response) {
    let body = res.json() || [];
    return body.length === 0 ? null : body[0];
  }

  private extractDataObject(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
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
