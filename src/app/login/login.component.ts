import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFireAuth } from "angularfire2/auth";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  errorMessage: string;
  formIsValid = true;

  constructor(
    public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required],
    });
  }

  login() {
    if (this.formLogin.valid) {
      this.spinner.show();
      this.formIsValid = true;

      this.afAuth.auth
        .signInWithEmailAndPassword(
          this.formLogin.value.email,
          this.formLogin.value.password
        )
        .then((user) => {
          this.spinner.hide();
          console.log("USER: ", user);
        })
        .catch((error) => {
          this.spinner.hide();
          this.errorMessage = error.message;
          this.formIsValid = false;
        });
    } else {
      this.spinner.hide();
      this.errorMessage = "You have entered an invalid username or password";
      this.formIsValid = false;
    }
  }
}
