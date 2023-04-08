import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SilderComponent } from './silder/silder.component';

@NgModule({
  declarations: [HomeComponent, SilderComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
