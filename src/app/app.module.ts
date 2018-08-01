import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { EditdataComponent } from './editdata/editdata.component';
import { FirstserviceService } from "./firstservice.service";


const routs : Routes =[
 { 
   path:'display', component : DisplaydataComponent
 },
 { 
  path:'', component : NameEditorComponent
},
  {
   path:'edit' , component : EditdataComponent
 }
];

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    DisplaydataComponent,EditdataComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routs),
    ReactiveFormsModule
  ],
  providers: [FirstserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
