import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { map} from 'rxjs/operators';
import { Observable } from '../../node_modules/rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private url:string = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http:Http) { }

getEmployees() :Observable<any>{

  return this.http.get(this.url).pipe(map(data=>data.json()));
}



}
