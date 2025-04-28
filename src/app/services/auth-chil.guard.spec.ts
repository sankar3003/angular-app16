import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authChilGuard } from './auth-chil.guard';

describe('authChilGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authChilGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
