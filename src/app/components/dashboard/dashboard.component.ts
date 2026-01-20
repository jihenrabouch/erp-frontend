import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h1>📊 Tableau de Bord</h1>
      <p>Bienvenue dans votre ERP !</p>
      <div style="display: flex; gap: 20px; margin-top: 20px;">
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3>Projets</h3>
          <p style="font-size: 24px; font-weight: bold;">0</p>
        </div>
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3>Tâches</h3>
          <p style="font-size: 24px; font-weight: bold;">0</p>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {}