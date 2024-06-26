import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { TableComponent } from './table/table.component';
import { TableColspanComponent } from './table-colspan/table-colspan.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',  component: ProductsListComponent,
  },
  {
    path: 'products/:id', component: ProductDetailsComponent
  },
  { path: 'table', component: TableColspanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
