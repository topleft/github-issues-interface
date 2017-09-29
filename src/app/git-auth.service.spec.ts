import { TestBed, inject } from '@angular/core/testing';

import { GitAuthService } from './git-auth.service';

describe('GitAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitAuthService]
    });
  });

  it('should be created', inject([GitAuthService], (service: GitAuthService) => {
    expect(service).toBeTruthy();
  }));
});
