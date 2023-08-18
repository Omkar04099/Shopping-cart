
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }


  public generateToken(request: any){
    return this.http.post("http://localhost:8086/authenticate", request, {responseType: 'text' as 'json'});
  }

  public welcome(token: string){
    token = token.slice(8, (token.length)-2);
    let tokenStr = 'Bearer '+ token;
    // console.log(tokenStr);
    
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get('http://localhost:8086/home',{headers, responseType: 'text' as 'json'})
  }
}
