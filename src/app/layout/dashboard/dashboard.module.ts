import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule
    ],
    declarations: [
        DashboardComponent,
        ChatComponent,
        DogDetailComponent
    ]
})
export class DashboardModule {}