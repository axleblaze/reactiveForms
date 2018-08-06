import { Injectable } from '@angular/core';
import { RouterModule, Router, CanActivate } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private route: Router) { }
 
 
 
  canActivate() {
    if ("op"!=localStorage.getItem("abx") )
   
    //if we have more than one data 
   
    // && !!localStorage.getItem("")
  
     {      //this.route.navigate(['/login'])
   
      return true;

    }
    else {
      this.route.navigate(['/display'])
      return false;
    }
  }

}
