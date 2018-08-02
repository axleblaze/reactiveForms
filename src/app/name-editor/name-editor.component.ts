import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { FirstserviceService } from "../firstservice.service";

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {



  passwordcheck() {
    if (this.profileForm.value.password !== this.profileForm.value.confirmpassword) {
      //console.log("False");
    } else {
      //console.log("True");
    }
  }

  submitfxn() {
    //localStorage.setItem("data",JSON.stringify(this.profileForm.value));
    this.FirstserviceService.setData(this.profileForm.value);
    this.route.navigate(["/display"]);
  }

  onButtonClick() {

    this.route.navigate(['/edit']);
  }

  showpass() {
    this.pass = "text";
  }

  hidepass() {
    this.pass = "password";
  }


  profileForm: FormGroup;
  
  //profileform2:FormGroup;
  //profileform2:FormGroup;
  pass = "password";

 
  user;
  constructor(private FirstserviceService: FirstserviceService, private route: Router) {
    this.user = FirstserviceService.getData();
    
    

   
   
    if (this.user == undefined) {
      this.user={
        firstname:''
      }
      console.log(this.user,"when undifine show");
    }


    this.profileForm = new FormGroup({

      firstname: new FormControl(this.user.firstname, [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]),

      lastname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]),

      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$')]),

      gender: new FormControl('', [Validators.required, Validators.pattern('[m/f/o/M/F/O ]*')]),

      contact: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10),]),

      password: new FormControl('', [Validators.required]),

      confirmpassword: new FormControl('', [Validators.required,]),

      empid: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4),])

    });

   // this.profileForm2 = new FormGroup({
      
      //firstname: new FormControl('this.user.firstname')
      

  // })
   //console.log(this.user.firstname);

  }

    

  ngOnInit() {
    
  
   
  }
      
      
  }


