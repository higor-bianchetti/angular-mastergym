import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { auth, User } from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "mastergym";
  user: User;
  loading: boolean = true;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((user) => {
      this.loading = false;
      this.user = user;
    });
  }

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
