import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header style="padding:12px;border-bottom:1px solid #eee;display:flex;gap:16px;">
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/projects">Projects</a>
      <span style="margin-left:auto;">ChronoHub</span>
    </header>
    <main style="padding:16px;">
      <router-outlet />
    </main>
  `
})
export class AppLayoutComponent {}
