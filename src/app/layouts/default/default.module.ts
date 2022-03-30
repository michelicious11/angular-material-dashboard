import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeliveryComponent } from '../../modules/delivery/delivery.component';
import { InventoryComponent } from '../../modules/inventory/inventory.component';
import { HomeComponent } from '../../modules/home/home.component';
import { OrderComponent } from '../../modules/order/order.component';
import { UserListComponent } from '../../modules/user-list/user-list.component';
import { LoginComponent } from '../../modules/login/login.component';
import { RegisterComponent } from '../../modules/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DefaultComponent,
    DeliveryComponent,
    InventoryComponent,
    HomeComponent,
    OrderComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [

  ]
})
export class DefaultModule { }
