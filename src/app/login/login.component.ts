import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { EmployeeService } from '../employee.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username:string;

  constructor(private route:Router ,private service:EmployeeService) { }

  ngOnInit() {
   
  }
  onSubmit(){
    
    localStorage.setItem('username' ,this.username);
    this.route.navigate(["/edit"]);
  
  }
  
get()
{
  var res = this.service.getEmployees().subscribe(Response =>console.log(Response))
console.log(res);
}
}
