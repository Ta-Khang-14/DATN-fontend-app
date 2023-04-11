import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SilderComponent } from './silder/silder.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { MenuComponent } from './menu/menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { BookTableComponent } from './book-table/book-table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    SilderComponent,
    IntroduceComponent,
    MenuComponent,
    SubMenuComponent,
    BookTableComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [HomeComponent, IntroduceComponent],
})
export class HomeModule {}
