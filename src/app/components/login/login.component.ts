import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });


  email = document.getElementById('email');

  login() {


    let authRequest = {
      "username": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
    // CALL API with username and password
    if (this.loginForm.invalid) return;
    this.getAccessToken(authRequest);

    // console.log(flag);
    // alert('Calling backend to login');
    
    

  }


  constructor(private jwtService: JwtClientService, private router: Router, private http: HttpClient) {
  
  }

  response: any


   public async getAccessToken(authRequest: any) {
    let resp = this.jwtService.generateToken(authRequest);
    resp.subscribe(data => this.accessApi(data)
      , error => {
        if (error) {
          console.log('error in logging in', error);
          alert('Invalid Username/Password');
          this.loginForm.reset();
          // window.location.reload();
        }
       
      });

  }


  public accessApi(token: any) {
    let resp = this.jwtService.welcome(token);
    resp.subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/home']);
    },(data) => { this.response = data });

  }

}
