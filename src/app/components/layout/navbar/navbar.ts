import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // ← 3 niveaux

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  constructor(@Inject(AuthService) private authService: AuthService) {}

  getUsername(): string | null {
    return this.authService.getUsername();
  }

  logout(): void {
    this.authService.logout();
  }
}