import { TestBed } from '@angular/core/testing';

import { Orderser } from './orderser';

describe('Orderser', () => {
  let service: Orderser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Orderser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
