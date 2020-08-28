import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeResult } from '../models/employe-result';
import { Roles } from '../models/roles';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  selectedFile: File =null;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  getEmployes() {
  
    return this.http.get<EmployeResult>(`http://localhost:5172/api/Employe`).pipe(
    );
  }
  getRoles() {
  
    return this.http.get<Roles[]>(`http://localhost:5172/api/Role`).pipe(
    );
  }

  getEmployesSecundPage(x) {
  
    return this.http.get<EmployeResult>(`http://localhost:5172/api/Employe?pageNumber=`+x).pipe(
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
    RoleId: ['', Validators.required], //problem sa validator. required
    Description: ['', [Validators.required, Validators.minLength(10)]],
    Image: ['', Validators.required],
    LastFinishedEducation: ['', [Validators.required, Validators.minLength(5)]],
     Passwords: this.fb.group({
       Password: ['', [Validators.required, Validators.minLength(4)]],
       ConfirmPassword: ['', Validators.required]
     }, { validator: this.comparePasswords })
     } 
  );

   comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
  if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
       else
         confirmPswrdCtrl.setErrors(null);
     }
   }
   addEmploye() {
   
    const fd = new FormData();
     fd.append('Image', this.selectedFile);
     fd.append('LastFinishedEducation', this.formModel.value.LastFinishedEducation);
    fd.append('UserSex', this.formModel.value.UserSex);
     fd.append('Description', this.formModel.value.Description);
     fd.append('FirstName', this.formModel.value.FirstName);
     fd.append('Surname', this.formModel.value.Surname);
     fd.append('Email', this.formModel.value.Email);
     fd.append('BirthDate', this.formModel.value.BirthDate);
     fd.append('RoleId', this.formModel.value.RoleId);
     fd.append('CityId', this.formModel.value.CityId);
     fd.append('Street', this.formModel.value.Street);
     fd.append('StreetNumber', this.formModel.value.StreetNumber);
     fd.append('PhoneNumber', this.formModel.value.PhoneNumber);
     fd.append('Password', this.formModel.value.Password);
     console.log(fd);
     console.log(this.formModel.value.RoleId);
     return this.http.post('http://localhost:5172/api/Employe',fd );
   }
  
}
