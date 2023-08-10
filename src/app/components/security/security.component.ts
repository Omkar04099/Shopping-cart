import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest:any = {
    "username": "name1@gmail.com",
    "password":"1234"
}

  response: any

  constructor(private jwtService: JwtClientService){
  }


  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any){
    let resp = this.jwtService.generateToken(authRequest);
    resp.subscribe(data =>this.accessApi(data));
  }


  public accessApi(token: any){
    let resp = this.jwtService.welcome(token);
    resp.subscribe(data=>this.response=data);
  }
}
