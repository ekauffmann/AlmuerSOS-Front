/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoresService } from './stores.service';
import {HttpModule} from '@angular/http';

describe('Service: Stores', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [StoresService]
    });
  });

  it('should ...', inject([StoresService], (service: StoresService) => {
    expect(service).toBeTruthy();
  }));
});
