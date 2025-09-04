import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

export interface LoginDto { email: string; password: string; }
export interface AuthResponse { accessToken: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private tokens = inject(TokenService);

  login(dto: LoginDto) {
    return this.http.post<AuthResponse>(`${env.apiUrl}/auth/login`, dto).pipe(
      tap(res => this.tokens.token = res.accessToken)
    );
  }

  logout() { this.tokens.clear(); }
  isLoggedIn() { return !!this.tokens.token; }
}
