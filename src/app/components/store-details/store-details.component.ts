import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../classes/product';
import { Store } from '../../classes/store';
import { StoresService } from '../../services/stores/stores.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  private routerSubscribe: any;
  private store: Store;
  private products: Product[];

  constructor(private storeService: StoresService, private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      let id = params['id'];
      this.storeService.getStore(id).subscribe(store => {
        this.store = store;
      });
      this.productService.getProducts(id).subscribe(products => {
        this.products = products;
      });
    });
  }
}
