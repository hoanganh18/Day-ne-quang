import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:3000/user'
  GetAll(){
    return this.http.get(this.apiurl);
  }
  Getbycode(code:any){
    return this.http.get(this.apiurl + '/'+code);
  }

  Proceedregister(inputdata:any){
    console.log("anh ga: ",inputdata)
return this.http.post(this.apiurl,inputdata)
  }

  Updateuser(code:any,inputdata:any){
    return this.http.post(this.apiurl+'/'+code,inputdata)
      }
}
