import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app.component';
import { AppRoutingModule } from './app-routing.module';
import { SessionService } from './services/session/session.service';
import { StoresService } from './services/stores/stores.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { StoreDetailsComponent } from './components/store-details/store-details.component';
import { ProductsService } from './services/products/products.service';
import { StoresListComponent } from './components/stores-list/stores-list.component';
import { ServiceDaysService } from './services/service-days/service-days.service';
import { StoreAdminComponent } from './components/store-admin/store-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    StoresListComponent,
    LandingPageComponent,
    StoreDetailsComponent,
    StoreAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    SessionService,
    StoresService,
    ProductsService,
    ServiceDaysService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
