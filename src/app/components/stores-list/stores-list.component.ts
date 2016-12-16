import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '../../classes/store';
import { StoresService } from '../../services/stores/stores.service';
import { SessionService } from '../../services/session/session.service';
import { User } from '../../classes/user';


@Component({
  selector: 'app-stores-list',
  templateUrl: 'stores-list.component.html',
  styleUrls: ['stores-list.component.css']
})
export class StoresListComponent implements OnInit {

  private stores: Observable<Store[]>;
  private user: User;

  constructor(
    private sessionService: SessionService,
    private storesService: StoresService
  ) { }

  ngOnInit(): void {
    this.getSessionUser();
    this.getStores();
  }

  getStores() {
    this.stores = this.storesService.getStores();
  };

  getSessionUser () {
    this.sessionService.getSessionSubject().subscribe(
      sessionUser => {
        this.user = sessionUser;
      }
    );
    this.sessionService.getSession();
  }

  isThisUserManager(store: Store): boolean {
    return StoresService.isUserStoreManager(store, this.user);
  }
}
