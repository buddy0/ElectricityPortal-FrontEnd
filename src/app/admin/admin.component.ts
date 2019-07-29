import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public alogin=true;
  public adash=false;
  username:string;
  password:string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  LoginAdmin(){
    if(this.username == "Admin"  && this.password == "000"){
      this.alogin=false;
      this.adash=true;
      console.log("Welcome "+this.username);
      this.router.navigate(['/map'])
    }
    else{
      console.log("Sorry! Your username or password seem to be incorrect.")
      alert("Invalid username or password!");
    }
  }

}
