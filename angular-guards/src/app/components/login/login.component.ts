import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm?: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  updateValue() {
    this.authService.setValue(true);
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      // Call the authentication service's login method
      if (this.authService.login(username, password)) {
        // Navigate to the ProductListComponent upon successful login
        this.updateValue();
        this.router.navigate(['/products']);
      } else {
        // Handle authentication error (show error message, etc.)
        this.loginForm.get('username').setValue('');
        this.loginForm.get('password').setValue('');
        alert('Sorry,user does not exist');
      }
    }
  }
}
