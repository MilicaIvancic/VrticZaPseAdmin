import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Dog } from './models/dog';
import { DogService } from './service/dog.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    
    public data: Dog;

    constructor(
        private dogService: DogService,
        private router: Router,
    ) {
          
    }

    ngOnInit() {
        this.getData();
    }

    getData(){
        
        this.dogService.getDogs().subscribe(x=>{
            this.data=x
        });
    }
    getDataSecunPage(x){
        
        this.dogService.getDogsSecundPage(x).subscribe(y=>{
            this.data=y
            
        });
    }

    details(x) {
        this.router.navigate(['dogDetails', x]);
    }
}
