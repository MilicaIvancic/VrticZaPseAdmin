import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { UserService } from './user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    formModel = {
        email: '',
        password: ''
        
      }
      progressBar = true;
    constructor(
        private service: UserService, 
        private router: Router, 
        private toastr: ToastrService

    ) {}

    ngOnInit() {
        if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/dashboard');
    }

    
        onSubmit(form: NgForm) {
            
            this.service.login(form.value).subscribe(
              (res: any) => {
                localStorage.setItem('token', res.token);
                this.toastr.success('Bravo');
                this.progressBar = false;
                this.router.navigateByUrl('/dashboard');
              }
              ,
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      });
          }

          showToaster(){
            
            this.toastr.success("Hello, I'm the toastr message.")
        } 
    
}
