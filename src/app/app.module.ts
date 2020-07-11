import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { AngularFirestore } from "angularfire2/firestore";
import { NgxSpinnerModule } from "ngx-spinner";
import {
  NgbDropdownModule,
  NgbProgressbarModule,
} from "@ng-bootstrap/ng-bootstrap";

import { environment } from "../environments/environment";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoadingComponent } from "./ui/loading/loading.component";
import { HeaderComponent } from "./ui/header/header.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { NewCustomerComponent } from "./new-customer/new-customer.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    HeaderComponent,
    CustomersListComponent,
    NewCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
