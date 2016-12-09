import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { SessionService } from './services/session.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoresListComponent } from './components/stores-list/stores-list.component';
import { StoresService } from './services/stores.service';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const ROUTES: Routes = [
  {path: 'stores', component: StoresListComponent},
  {path: '', component: LandingPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StoresListComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot()
  ],
  providers: [
    SessionService,
    StoresService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
