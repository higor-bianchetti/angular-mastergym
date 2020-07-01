import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required],
    });
  }

  login() {
    this.afAuth.auth
      .signInWithEmailAndPassword(
        this.formLogin.value.email,
        this.formLogin.value.password
      )
      .then((user) => {
        console.log("USER: ", user);
      });
  }
}
