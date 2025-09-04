import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from './token.service';

export const guestGuard: CanActivateFn = () => {
  const token = inject(TokenService).token;
  const router = inject(Router);
  if (!token) return true;
  router.navigate(['/']);
  return false;
};
