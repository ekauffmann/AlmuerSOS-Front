import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { StoreDetailsComponent } from './components/store-details/store-details.component';
import { StoresListComponent } from './components/stores-list/stores-list.component';


const ROUTES: Routes = [
  {path: 'stores/:id', component: StoreDetailsComponent},
  {path: 'stores', component: StoresListComponent},
  {path: '', component: LandingPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
