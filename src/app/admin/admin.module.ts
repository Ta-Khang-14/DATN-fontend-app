import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { DoashboardComponent } from './doashboard/doashboard.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { MatTableModule } from '@angular/material/table';
import { ProductFormComponent } from './product-form/product-form.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DoashboardComponent,
    ProductViewComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgChartsModule,
    MatTableModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
  ],
})
export class AdminModule {}
