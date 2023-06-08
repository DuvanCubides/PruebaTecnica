import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private url:string = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http:HttpClient) { }

  GetAll(){
    return this.http.get(this.url);
  }
  Get(Id:Number){
    return this.http.get(this.url+Id);
  }
  Post(data:any){
    return this.http.post(this.url,data);
  }
  Update(Id:Number,data:any){
    return this.http.put(this.url+Id,data);
  }
  Delete(Id:Number){
    return this.http.delete(this.url+Id);
  }


}
