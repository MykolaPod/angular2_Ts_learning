/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RaceService } from './race-service';

describe('RaceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaceService]
    });
  });

  it('should ...', inject([RaceService], (service: RaceService) => {
    expect(service).toBeTruthy();
  }));
});
