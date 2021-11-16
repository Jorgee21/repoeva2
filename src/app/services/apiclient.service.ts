import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Access-Control-Allow-Origin' : '*' 
    })
  }
//mi ip
  apiURL = '192.168.0.5';

  constructor(private http:HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(
      retry(3)
    );
  }

}
