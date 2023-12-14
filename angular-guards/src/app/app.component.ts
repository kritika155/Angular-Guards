import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-guards';
  flag?: any;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.getValue().subscribe((e) => {
      this.flag = e.valueOf();
    });
    console.log('Flag Signals:', this.flag);
  }
  updateValue() {
    this.authService.setValue(false);
  }

  logout(): void {
    this.authService.logout();
    this.updateValue();
    this.router.navigate(['/login']);
  }
}
