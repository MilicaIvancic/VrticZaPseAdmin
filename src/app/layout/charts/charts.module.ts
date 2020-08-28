import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { InsertUserComponent } from './insert-user/insert-user.component';

@NgModule({
    imports: [CommonModule, 
        Ng2Charts, 
        ChartsRoutingModule, 
        PageHeaderModule,
        ToastrModule.forRoot({
            progressBar: true
          }),
          FormsModule,
          ReactiveFormsModule
        ],
          
    declarations: [ChartsComponent, UserDetailsComponent, InsertUserComponent]
})
export class ChartsModule {}
