/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ServiceDaysService } from './service-days.service';


describe('Service: ServiceDays', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ServiceDaysService]
    });
  });

  it('should ...', inject([ServiceDaysService], (service: ServiceDaysService) => {
    expect(service).toBeTruthy();
  }));
});
