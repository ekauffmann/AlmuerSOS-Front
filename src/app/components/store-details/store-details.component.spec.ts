/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { DummyComponent } from '../../app-testing';
import { ProductsService } from '../../services/products/products.service';
import { StoresService } from '../../services/stores/stores.service';
import { StoreDetailsComponent } from './store-details.component';
import { ServiceDaysService } from '../../services/service-days/service-days.service';


describe('StoreDetailsComponent', () => {
  let component: StoreDetailsComponent;
  let fixture: ComponentFixture<StoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule.withRoutes([
          {path: 'stores/:id', component: DummyComponent}
        ])
      ],
      declarations: [
        StoreDetailsComponent,
        DummyComponent
      ],
      providers: [
        StoresService,
        ProductsService,
        ServiceDaysService,
        {provide: ActivatedRoute, useValue: {params: Observable.of({id: 1})}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
