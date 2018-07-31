import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {
  user;
  constructor() { 
    this.user = JSON.parse(localStorage.getItem('data'));
  }

  ngOnInit() {
  }


  
}
