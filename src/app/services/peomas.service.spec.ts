import { TestBed } from '@angular/core/testing';

import { PeomasService } from './peomas.service';

describe('PeomasService', () => {
  let service: PeomasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeomasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
