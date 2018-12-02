import { TestBed, inject } from '@angular/core/testing';

import { OnDisableComponentService } from './on-disable-component.service';

describe('OnDisableComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnDisableComponentService]
    });
  });

  it('should be created', inject([OnDisableComponentService], (service: OnDisableComponentService) => {
    expect(service).toBeTruthy();
  }));
});
