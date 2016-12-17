import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Alert } from '../../classes/alert';
import { Image } from '../../classes/image';
import { Store } from '../../classes/store';
import { StoresService } from '../../services/stores/stores.service';
import { SessionService } from '../../services/session/session.service';
import { User } from '../../classes/user';


@Component({
  selector: 'app-store-admin',
  templateUrl: './store-admin.component.html',
  styleUrls: ['./store-admin.component.css']
})
export class StoreAdminComponent implements OnInit, OnDestroy {

  private routerSubscription$: any;

  store: Store;
  storeImage: Image;

  user: User;

  alert: Alert;

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
        this.store = store;
        this.storesService.getStoreImage(store).subscribe(image => {
          this.storeImage = image;
        });
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
    this.storesService.saveStore(this.store).subscribe(
      () => {
        this.alert = new Alert('success', 'El detalle de la tienda fue guardado exitosamente.');
        setTimeout(() => this.alert = null, 3000);
      },
      error => {
        this.alert = new Alert('success', 'Hubo un error al guardar el detalle de la tienda.');
        setTimeout(() => this.alert = null, 3000);
      }
    );
  }

  isThisUserManager(): boolean {
    return StoresService.isUserStoreManager(this.store, this.user);
  }

  imageChangeListener($event): void {
    this.readImage($event.target);
  }

  readImage(inputValue: any): void {
    let file: File = inputValue.files[0];
    let reader: FileReader = new FileReader();

    this.alert = null;

    reader.onloadend = () => {
      this.storesService.saveStoreImage(this.store, new Image(reader.result)).subscribe(
        image => {
          this.storeImage = image;

          this.alert = new Alert('success', 'La imagen fue guardada exitosamente.');
          setTimeout(() => this.alert = null, 3000);
        },
        error => {
          this.alert = new Alert('error', 'Hubo un error al guardar la imagen.');
          setTimeout(() => this.alert = null, 3000);
        }
      );
    };

    reader.readAsDataURL(file);
  }
}
