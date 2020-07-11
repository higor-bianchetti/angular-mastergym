import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "angularfire2/storage";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-new-customer",
  templateUrl: "./new-customer.component.html",
  styleUrls: ["./new-customer.component.scss"],
})
export class NewCustomerComponent implements OnInit {
  customerForm: FormGroup;
  uploadProgress: number = 0;
  showProgressBar = false;
  imageUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage
  ) {}

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

  uploadImage(event) {
    if (event.target.files.length > 0) {
      this.showProgressBar = true;
      this.imageUrl = "";

      const imgName =
        this.customerForm.value.cpf || new Date().getTime().toString();
      const file = event.target.files[0];

      const typeFile = file.name
        .toString()
        .substring(file.name.toString().lastIndexOf("."));
      const path = `customers/img-${imgName}${typeFile}`;
      const task = this.storage.upload(path, file);
      const ref = this.storage.ref(path);

      task.percentageChanges().subscribe((result) => {
        this.uploadProgress = Math.round(result);
      });

      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            ref.getDownloadURL().subscribe((url) => {
              this.showProgressBar = false;
              this.imageUrl = url;
            });
          })
        )
        .subscribe();
    }
  }
}
