import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AplicationUsersService } from 'src/app/layout/charts/services/aplication-users.service';
import { CityResult } from 'src/app/layout/charts/models/city-result';
import { Roles } from '../../models/roles';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.scss']
})
export class AddEmployeComponent implements OnInit {

  private data:CityResult;
  private role:Roles[];
  
  constructor(
    public service: EmployeService,
    private messageService: MessageService,
    private router: Router,
    private city: AplicationUsersService
  ) { }

  ngOnInit() {
    this.service.formModel.reset();
    this.getRoles();
    this.getCityes();
  }
  onFileChange(event) {
    this.service.selectedFile = event.target.files[0];
  }
  getCityes(){
        
    this.city.getCityes().subscribe(x=>{
        this.data=x
        console.log(x);
    });
}

  getRoles(){
        
  this.service.getRoles().subscribe(x=>{
      this.role=x
      console.log(x);
  });
}

onSubmit() {
  this.service.addEmploye().subscribe(
    (res: any) => {
      
        this.service.formModel.reset();
        this.service.formModel.reset();
        this.messageService.add({ severity: 'success', summary: 'Insert zaposlenog', detail: 'Zaposleni uspesno unet' });
        this.router.navigateByUrl('/tables');
      
    },
    err => {
      if (err.status == 201) {
        this.service.formModel.reset();
        this.messageService.add({ severity: 'success', summary: 'Insert zaposlenog', detail: 'Zaposleni uspesno unet.' });
        this.router.navigateByUrl('/tables');

      }
      if (err.status == 422) {
        this.service.formModel.reset();
        this.messageService.add({ severity: 'error', summary: 'Insert zaposlenog', detail: 'Los format podataka' });
      }
      if (err.status == 404) {

        this.messageService.add({ severity: 'error', summary: 'Insert zaposlenog', detail: 'Trazeni podatak ne postoji' });
      }
      if (err.status == 409) {

        this.messageService.add({ severity: 'error', summary: 'Insert zaposlenog', detail: 'Svadja izmedju podataka' });
      }
      if (err.status == 400) {

        this.messageService.add({ severity: 'error', summary: 'Insert zaposlenog', detail: 'Los zahtev' });
        console.log(err)
      }
      if (err.status == 500) {

        this.messageService.add({ severity: 'error', summary: 'Insert zaposlenog', detail: 'Doslo je do greske, pokusajte kasnije' });
      }
    }
  );
}

}
