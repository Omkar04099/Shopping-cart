import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    mobNo: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
  });

  signup() {
    // CALL API with username and password
    if (this.signupForm.invalid) return;

    alert('Calling backend to login');
  }
}
