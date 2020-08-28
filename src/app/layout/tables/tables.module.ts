import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';

@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        PageHeaderModule,
        ToastModule,
        FormsModule,
        ReactiveFormsModule,],

    declarations: [TablesComponent, AddEmployeComponent]
})
export class TablesModule { }
