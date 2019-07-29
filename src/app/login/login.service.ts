import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
     constructor(public http: HttpClient) { }

     userLoginUrl='http://localhost:8080/userLogin/';

     authenticate(a) {
       return this.http.post(this.userLoginUrl,a);
     }
}
