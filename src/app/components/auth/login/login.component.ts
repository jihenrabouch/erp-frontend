import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.username && this.password) {
      this.loading = true;
      this.errorMessage = '';
      
      const credentials = {
        username: this.username,
        password: this.password
      };
      
      this.authService.login(credentials).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/dashboard']);
        },
        error: (error: any) => {
          this.loading = false;
          this.errorMessage = 'Identifiants incorrects';
          console.error('Login error:', error);
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs';
    }
  }
}