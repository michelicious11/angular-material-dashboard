import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DeliveryComponent } from './modules/delivery/delivery.component';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { HomeComponent } from './modules/home/home.component';
import { OrderComponent } from './modules/order/order.component';
import { UserListComponent } from './modules/user-list/user-list.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: 'deliveries',
    component: DeliveryComponent
  }, {
    path: 'inventory',
    component: InventoryComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'orders',
    component: OrderComponent
  }, {
    path: 'users',
    component: UserListComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
