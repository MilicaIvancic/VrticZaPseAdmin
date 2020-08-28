import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
     private http: HttpClient) { }

  

     login(formData) {
      return this.http.post("http://localhost:5172/api/User/Login", formData);
    }
}
