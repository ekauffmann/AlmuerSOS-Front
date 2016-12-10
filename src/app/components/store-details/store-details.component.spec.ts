/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { ProductsService } from '../../services/products/products.service';
import { StoresService } from '../../services/stores/stores.service';
import { StoreDetailsComponent } from './store-details.component';

describe('StoreDetailsComponent', () => {
  let component: StoreDetailsComponent;
  let fixture: ComponentFixture<StoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [StoreDetailsComponent],
      providers: [
        StoresService,
        ProductsService,
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
