import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RollerListComponent } from './pages/roller-list/roller-list.component';

const routes: Routes = [
  {path: '', component: RollerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
