import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

import { environment } from "../environments/environment";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoadingComponent } from "./ui/loading/loading.component";
import { HeaderComponent } from "./ui/header/header.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    HeaderComponent,
    CustomersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbDropdownModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
