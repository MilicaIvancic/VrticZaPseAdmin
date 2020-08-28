import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';

const routes: Routes = [
    {
        path: '', children: [

            { path: '', component: TablesComponent },
            { path: 'addEmploye', component: AddEmployeComponent }
            
      
          ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}
