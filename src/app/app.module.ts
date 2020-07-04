import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbDropdownModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
