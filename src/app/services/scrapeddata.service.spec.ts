import { TestBed } from '@angular/core/testing';

import { ScrapeddataService } from './scrapeddata.service';

describe('ScrapeddataService', () => {
  let service: ScrapeddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrapeddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
