import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DoashboardComponent } from './doashboard/doashboard.component';

@NgModule({
  declarations: [DoashboardComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
