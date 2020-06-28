import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "mastergym";

  constructor(public afAuth: AngularFireAuth) {}

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(
      "higorbianchetti@gmail.com",
      "123456"
    );
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
