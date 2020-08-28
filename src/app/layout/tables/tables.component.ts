import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { EmployeService } from './services/employe.service';
import { EmployeResult } from './models/employe-result';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
   public  data: EmployeResult;
   
    constructor(
        private service: EmployeService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.getEmployes();
    }

    getEmployes(){
        
        this.service.getEmployes().subscribe(x=>{
            this.data=x
            console.log(x);
        });
       
    }
    getDataSecunPage(x){
        
        this.service.getEmployesSecundPage(x).subscribe(y=>{
            this.data=y
            
        });
    }

    newEmploye() {
        this.router.navigate(['tables','addEmploye', ]);
    }
}
