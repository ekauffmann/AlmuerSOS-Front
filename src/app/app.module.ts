import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { SessionService } from './services/session.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoresListComponent } from './components/stores-list/stores-list.component';
import {StoresService} from "./services/stores.service";

@NgModule({
  declarations: [
    AppComponent,
    StoresListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    SessionService,
    StoresService
  ],
  bootstrap: [StoresListComponent]
})
export class AppModule { }
