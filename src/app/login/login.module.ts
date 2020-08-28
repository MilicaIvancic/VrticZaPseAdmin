import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
    imports: [
      
        CommonModule,
        TranslateModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            progressBar: true,
            timeOut: 1000,
            positionClass: 'toast-bottom-right',
            toastClass: 'toast toast-bootstrap-compatibility-fix'
          }),
          
        
        ],
    declarations: [LoginComponent],
    
})
export class LoginModule {}
