import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { InsertUserComponent } from './insert-user/insert-user.component';

const routes: Routes = [
    {
        path: '', children: [

            { path: '', component: ChartsComponent },
            { path: 'userDetails/:id', component: UserDetailsComponent },
            { path: 'newUser', component: InsertUserComponent }
      
          ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRoutingModule {}
