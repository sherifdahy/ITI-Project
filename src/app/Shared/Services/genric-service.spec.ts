import { TestBed } from '@angular/core/testing';

import { GenricService } from './genric-service';

describe('GenricService', () => {
  let service: GenricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
