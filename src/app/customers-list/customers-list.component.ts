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
    this.customers.length = 0;
    this.db
      .collection("customers")
      .get()
      .subscribe((result) => {
        result.docs.forEach((item) => {
          let customer = item.data();
          customer.id = item.id;
          customer.ref = item.ref;

          this.customers.push(customer);
        });
      });
  }
}
