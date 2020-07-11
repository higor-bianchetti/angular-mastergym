import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-new-customer",
  templateUrl: "./new-customer.component.html",
  styleUrls: ["./new-customer.component.scss"],
})
export class NewCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      cpf: ["", Validators.required],
      birth: ["", Validators.required],
      phone: [""],
      img: ["", Validators.required],
    });
  }

  add() {
    console.log(this.customerForm.value);
  }
}
