import { TestBed } from '@angular/core/testing';

import { JokoService } from './joko.service';

describe('JokoService', () => {
  let service: JokoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
