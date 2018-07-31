import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  
    profileForm:FormGroup

  constructor() {
    
      this.profileForm = new FormGroup({
      
        firstname: new FormControl('',[Validators.required , Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]),
      
        lastname: new FormControl('',[Validators.required , Validators.minLength(4),Validators.pattern('[a-zA-Z ]*')]),
      
        email: new FormControl('',[Validators.required , Validators.email]),
      
        gender : new FormControl('',[Validators.required , Validators.pattern('[a-zA-Z ]*'),Validators.minLength(4),Validators.maxLength(10)]),
      
        contact : new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10),]),
      
        password : new FormControl('',[Validators.required]),
      
        confirmpassword : new FormControl('',[Validators.required,]),
      
        empid : new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4),Validators.maxLength(4),])
    
    });      
    
   }

  ngOnInit() {
  }
  
}
