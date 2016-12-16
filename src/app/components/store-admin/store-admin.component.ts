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
      this.storesService.getStore(id).subscribe(store => this.store = store);
    });
  }

  ngOnDestroy() {
    this.routerSubscription$.unsubscribe();
  }

  getSessionUser() {
    this.sessionService.getSessionUser().subscribe(
      session => {
        this.user = (Object.keys(session).length !== 0) ? session : null;
      }
    );
  }

  saveStore() {
    this.storesService.saveStore(this.store).subscribe(x => console.log(x));
  }

  isThisUserManager(): boolean {
    return StoresService.isUserStoreManager(this.store, this.user);
  }
}
