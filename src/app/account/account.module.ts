import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRouting } from './account-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, AccountRouting, FormsModule],
})
export class AccountModule {}
