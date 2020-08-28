import { Component, OnInit } from '@angular/core';

import { AplicationUsersService } from '../services/aplication-users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CityResult } from '../models/city-result';


@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.scss']
})
export class InsertUserComponent implements OnInit {

  private data:CityResult;

  constructor(
    public service: AplicationUsersService, 
    private toastr: ToastrService,
    private router: Router, 

  ) { }

  

  ngOnInit() {
    this.service.formModel.reset();
    this.getCityes();
  }


  getCityes(){
        
    this.service.getCityes().subscribe(x=>{
        this.data=x
        console.log(x);
    });
}

  onSubmit() {
    this.service.inserUser().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
         
          this.router.navigateByUrl('/charts');

        }  
      },
      err => {
        console.log(err);
        alert("Ako je u tabeli prvi korisnik onaj koga ste upravo dodali, inssert je uspesno izvrsen, u suprotnom pokusajte ponovo malo kasnije ");
        this.router.navigateByUrl('/charts');
        //neki neocekivan token
      }
    );
  }


}
