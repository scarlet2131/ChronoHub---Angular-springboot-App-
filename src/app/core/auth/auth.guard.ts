import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from './token.service';

export const authGuard: CanActivateFn = (_route, state) => {
  const token = inject(TokenService).token;
  const router = inject(Router);
  if (token) return true;
  router.navigate(['/auth/login'], { queryParams: { redirect: state.url } });
  return false;
};
