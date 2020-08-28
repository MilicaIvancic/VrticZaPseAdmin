import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserResult } from '../models/user-result';
import { UserDetails } from '../models/user-details';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CityResult } from '../models/city-result';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
@Injectable({
  providedIn: 'root'
})
export class AplicationUsersService {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  getUsers() {
  
    return this.http.get<UserResult>(`http://localhost:5172/api/User`).pipe(
    );
  }

  getCityes() {
  
    return this.http.get<CityResult>(`http://localhost:5172/api/City?perPage=100`).pipe(
    );
  }
  getUsersAnotherPage(x) {
  
    return this.http.get<UserResult>(`http://localhost:5172/api/User?pageNumber=`+x).pipe(
    );
  }

  getUser(id: number) {
    return this.http.get<UserDetails>(`http://localhost:5172/api/User/${id}`).pipe(
    );
  }

 

  formModel = this.fb.group({
    UserSex: ['', Validators.required],
    FirstName: ['',[Validators.required, Validators.minLength(3)]],
    Surname: ['',[Validators.required, Validators.minLength(3)]],
    Email: ['', Validators.email],
    BirthDate: ['', Validators.required],
    CityId: ['', Validators.required],
    Street: ['', Validators.required],
    StreetNumber: ['', [Validators.required,  Validators.pattern("^[0-9]*$")]],
    PhoneNumber: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[0-9]*$")]],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
    } 
  );

  inserUser() {
    var body = {
      UserSex: this.formModel.value.UserSex,
      FirstName: this.formModel.value.FirstName,
      Surname: this.formModel.value.Surname,
      Email: this.formModel.value.Email,
      BirthDate: this.formModel.value.BirthDate,
      CityId: this.formModel.value.CityId,
      Street: this.formModel.value.Street,
      StreetNumber: this.formModel.value.StreetNumber,
      PhoneNumber: this.formModel.value.PhoneNumber,
      Password: this.formModel.value.Passwords.Password
    };
    console.log(body);
   
    return this.http.post('http://localhost:5172/api/User', body);
  }

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:5172/api/User/${id}`);
  }
}
