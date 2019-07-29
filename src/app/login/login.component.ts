import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public udash=false;
public ulogin=true;

  username:string;
  password:string;
  uname:string;

  constructor(private router: Router) {
    }

    ngOnInit() {
  }

  LoginUser(){
    if(this.username == "Daniel"  && this.password == "123"){
      this.uname=this.username;
      this.udash=true;
      this.ulogin=false;
      console.log("Welcome "+this.username);
    }
    else{
      console.log("Sorry! Your username or password seem to be incorrect.");
      alert("Invalid username or password!");
    }
  }

  AuthenticateUser() {
    
  }

}
