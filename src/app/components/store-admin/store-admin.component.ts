import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '../../classes/store';
import { StoresService } from '../../services/stores/stores.service';
import { User } from '../../classes/user';
import { SessionService } from '../../services/session/session.service';


@Component({
  selector: 'app-store-admin',
  templateUrl: './store-admin.component.html',
  styleUrls: ['./store-admin.component.css']
})
export class StoreAdminComponent implements OnInit, OnDestroy {

  private routerSubscription$: any;

  store: Store;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private storesService: StoresService,
  ) { }

  ngOnInit() {
    this.getSessionUser();
    this.routerSubscription$ = this.route.params.subscribe(urlParams => {
      let id = urlParams['id'];
      this.storesService.getStore(id).subscribe(store => {
        console.log(store);
        this.store = store;
      });
    });
  }

  ngOnDestroy() {
    this.routerSubscription$.unsubscribe();
  }

  getSessionUser () {
    this.sessionService.getSessionSubject().subscribe(
      sessionUser => {
        this.user = sessionUser;
      }
    );
    this.sessionService.getSession();
  }

  saveStore() {
    this.storesService.saveStore(this.store).subscribe();
  }

  isThisUserManager(): boolean {
    return StoresService.isUserStoreManager(this.store, this.user);
  }
}
