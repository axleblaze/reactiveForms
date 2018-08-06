import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { FirstserviceService } from '../firstservice.service';
@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {
  user;
  constructor(private route:Router , private FirstserviceService : FirstserviceService ,) { 
    //this.user = JSON.parse(localStorage.getItem('data'));
    this.user=FirstserviceService.getData();
    
    
  
  }

  
  
  editfxn(){
    //this.FirstserviceService.setData(this.profileForm.value);
    this.route.navigate(["/edit"]);
    
  }
  
  
  ngOnInit() {
  }


  
}
