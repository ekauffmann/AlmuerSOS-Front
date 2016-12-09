import { Component, OnInit } from '@angular/core';
import {Store} from '../../classes/store';
import {StoresService} from '../../services/stores.service';

@Component({
  selector: 'app-stores-list',
  templateUrl: 'stores-list.component.html',
  styleUrls: ['stores-list.component.css']
})
export class StoresListComponent implements OnInit {

  private stores: Store[];

  constructor (private storeService: StoresService) {}

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
