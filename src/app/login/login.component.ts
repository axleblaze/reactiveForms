import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username:string;

  constructor(private route:Router) { }

  ngOnInit() {
   
  }
  onSubmit(){
    
    localStorage.setItem('username' ,this.username);
    this.route.navigate(["/"]);
  
  }
  

}
