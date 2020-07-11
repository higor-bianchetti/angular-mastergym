import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomersListComponent } from "./customers-list/customers-list.component";
import { NewCustomerComponent } from "./new-customer/new-customer.component";

const routes: Routes = [
  {
    path: "customers-list",
    component: CustomersListComponent,
  },
  {
    path: "new-customer",
    component: NewCustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
