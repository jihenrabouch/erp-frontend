import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h1>📋 Liste des Projets</h1>
      <p>Gestion des projets - Fonctionnalité à venir</p>
      <button style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px;">
        Nouveau Projet
      </button>
    </div>
  `
})
export class ProjectListComponent {}