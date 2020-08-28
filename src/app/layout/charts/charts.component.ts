import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserResult } from './models/user-result';
import { AplicationUsersService } from './services/aplication-users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    

    public data: UserResult;

    constructor(
        private service: AplicationUsersService,
        private router: Router,
    ) {
          
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers(){
        
        this.service.getUsers().subscribe(x=>{
            this.data=x
        });
    }
    getDataSecunPage(x){
        
        this.service.getUsersAnotherPage(x).subscribe(y=>{
            this.data=y
            
        });
    }

    delete(x) {
        this.service.deleteUser(x).subscribe(
          (res: any) => {
            debugger;
                alert("Uspesno obrisan ");
                debugger;
              this.router.navigateByUrl('/charts/newUser');
    
            
          },
          err => {
            console.log(err);
            alert("Doslo je do greske pokusajte kasnije ");
            this.router.navigateByUrl('/charts');
            //neki neocekivan token
          }
         
        );
        this.router.navigateByUrl('/charts');
      }

    details(x) {
        this.router.navigate(['charts','userDetails', x]);
    }
    newUser() {
        this.router.navigate(['charts','newUser', ]);
    }
}
