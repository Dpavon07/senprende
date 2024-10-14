import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private api_placceholder = "https://jsonplaceholder.typicode.com/posts";
  private api_placceholderType = "https://jsonplaceholder.typicode.com/posts/";
  constructor(private http:HttpClient) { }


  public GetAll(): Observable<any>  { 
    return this.http.get(this.api_placceholder);

  }

  public GetType(id:number): Observable<any>  { 
    return this.http.get(this.api_placceholderType + id);

  }
}
