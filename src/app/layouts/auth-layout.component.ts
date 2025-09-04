// Layout components wrap child pages and provide shared UI (header/nav or a centered card).
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main style="min-height:100dvh;display:grid;place-items:center;background:#fafafa;">
      <div style="width:100%;max-width:440px;background:#fff;padding:24px;border:1px solid #eee;border-radius:12px;">
        <router-outlet />
      </div>
    </main>
  `
})
export class AuthLayoutComponent {}
