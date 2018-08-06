import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplaydataComponent } from './displaydata/displaydata.component';

import { FirstserviceService } from "./firstservice.service";
import { LoginComponent } from './login/login.component';
import {AuthService } from './auth.service';
import {FormsModule} from '@angular/forms'
import{ HttpModule } from '@angular/http';

const routs : Routes =[
 { 
   path:'display', component : DisplaydataComponent
 },
 { 
  path:'', component : NameEditorComponent , canActivate :[AuthService]
},
{
  path:'edit' , component : NameEditorComponent 
},
{
  path:'login' , component :  LoginComponent 
  
}

];

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    DisplaydataComponent,
    LoginComponent,
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routs),
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [FirstserviceService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
