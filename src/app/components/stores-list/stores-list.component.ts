import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '../../classes/store';
import { StoresService } from '../../services/stores/stores.service';


@Component({
  selector: 'app-stores-list',
  templateUrl: 'stores-list.component.html',
  styleUrls: ['stores-list.component.css']
})
export class StoresListComponent implements OnInit {

  private stores: Observable<Store[]>;

  constructor (
    private storesService: StoresService
  ) {}

  ngOnInit (): void {
    this.getStores();
  }

  getStores () {
    this.stores = this.storesService.getStores();
  }

}
