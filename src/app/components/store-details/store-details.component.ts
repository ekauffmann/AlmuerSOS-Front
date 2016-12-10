import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../classes/product';
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
  private products: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private storesService: StoresService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.routerSubscription$ = this.route.params.subscribe(params => {
      let id = params['id'];
      this.store = this.storesService.getStore(id);
      this.products = this.productsService.getProducts(id);
    });
  }

  ngOnDestroy() {
    this.routerSubscription$.unsubscribe();
  }

}
