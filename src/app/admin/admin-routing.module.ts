import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoashboardComponent } from './doashboard/doashboard.component';

const routes: Routes = [
  { path: '', component: DoashboardComponent },
  { path: '/doashboard', component: DoashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
