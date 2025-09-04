// Centralizes how we store/read/clear the JWT.
// Using localStorage is fine for this project (later you can switch to cookies if needed).

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private readonly key = 'ch_access_token';

  get token(): string | null {
    return localStorage.getItem(this.key);
  }
  set token(v: string | null) {
    if (v) localStorage.setItem(this.key, v);
    else localStorage.removeItem(this.key);
  }
  clear() { localStorage.removeItem(this.key); }
}
