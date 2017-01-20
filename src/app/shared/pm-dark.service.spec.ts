/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PmDarkService } from './pm-dark.service';

describe('PmDarkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PmDarkService]
    });
  });

  it('should ...', inject([PmDarkService], (service: PmDarkService) => {
    expect(service).toBeTruthy();
  }));
});
