import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoashboardComponent } from './admin/doashboard/doashboard.component';
import { ProductViewComponent } from './admin/product-view/product-view.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'me',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'admin',
    children: [
      { path: '', component: DoashboardComponent },
      { path: 'product', component: ProductViewComponent },
      {
        path: 'product-form',
        component: ProductFormComponent,
        data: {
          FormMode: 1,
        },
      },
      {
        path: 'product-edit/:id',
        component: ProductFormComponent,
        data: {
          FormMode: 2,
        },
      },
      {
        path: 'product-detail/:id',
        component: ProductDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
