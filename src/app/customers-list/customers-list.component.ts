import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.scss"],
})
export class CustomersListComponent implements OnInit {
  customers: any[] = new Array<any>();

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.db
      .collection("customers")
      .valueChanges()
      .subscribe((result) => {
        this.customers = result;
      });
  }
}
