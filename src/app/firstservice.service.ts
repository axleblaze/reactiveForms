import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  data;

  constructor() {}
  
 
    
    getData(){
      
      return this.data;
    }
    
    setData(sett){
     
      this.data= sett;
    }

  }
