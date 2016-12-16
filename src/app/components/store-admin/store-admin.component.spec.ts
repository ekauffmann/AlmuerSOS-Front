/* tslint:disable:no-unused-variable */
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DummyComponent } from '../../app-testing';
import { StoreAdminComponent } from './store-admin.component';
import { SessionService } from '../../services/session/session.service';
import { StoresService } from '../../services/stores/stores.service';

describe('StoreAdminComponent', () => {
  let component: StoreAdminComponent;
  let fixture: ComponentFixture<StoreAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          {path: 'stores/:id', component: DummyComponent}
        ])
      ],
      declarations: [ StoreAdminComponent, DummyComponent ],
      providers: [ SessionService, StoresService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
