import { Component, OnInit } from '@angular/core';
import {Store} from "../../classes/store";
import {StoreService} from "../../services/stores.service";

@Component({
  selector: 'stores-list',
  templateUrl: 'stores-list.component.html',
  styleUrls: ['stores-list.component.css']
})
export class StoresListComponent implements OnInit {

  private stores: Store[];

  constructor (private storeService: StoreService) {}

  ngOnInit (): void {
    this.getStores();
  }

  getStores () {
    this.storeService.getStores().subscribe(
      stores => {
        this.stores = stores;
      }
    );
  }
}
