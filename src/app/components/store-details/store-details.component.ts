import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { ServiceDay } from '../../classes/service-day';
import { ServiceDaysService } from '../../services/service-days/service-days.service';
import { Store } from '../../classes/store';
import { StoresService } from '../../services/stores/stores.service';


@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit, OnDestroy {

  private routerSubscription$: any;

  private store: Observable<Store>;
  private serviceDays: Observable<ServiceDay[]>;

  constructor(
    private route: ActivatedRoute,
    private storesService: StoresService,
    private serviceDaysService: ServiceDaysService
  ) { }

  ngOnInit() {
    this.routerSubscription$ = this.route.params.subscribe(urlParams => {
      let id = urlParams['id'];
      this.store = this.storesService.getStore(id);
      this.serviceDays = this.serviceDaysService.getServiceDays(id);
    });
  }

  ngOnDestroy() {
    this.routerSubscription$.unsubscribe();
  }

}
