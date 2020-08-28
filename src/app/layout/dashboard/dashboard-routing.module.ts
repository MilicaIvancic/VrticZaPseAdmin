import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';

const routes: Routes = [
    {
        path: '', children: [

            { path: '', component: DashboardComponent },
            { path: 'dogDetails/:id', component: DogDetailComponent }
      
          ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
