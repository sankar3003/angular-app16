import { CanActivateFn } from '@angular/router';

export const authChilGuard: CanActivateFn = (route, state) => {
  return false;
};
