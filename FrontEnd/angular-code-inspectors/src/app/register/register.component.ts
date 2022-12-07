import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {InspectorService} from "../service/inspector-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(protected route: Router, private inspectorService: InspectorService) { }

  ngOnInit(): void {
  }

  register() {
    let username = (document.getElementById("username") as HTMLInputElement).value;
    let password = (document.getElementById("password") as HTMLInputElement).value;
    let firstName = (document.getElementById("first_name") as HTMLInputElement).value;
    let lastName = (document.getElementById("last_name") as HTMLInputElement).value;
    let phone = (document.getElementById("phone") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let level = (document.getElementById("level") as HTMLInputElement).value;
    let type = (document.getElementById("type") as HTMLInputElement).value;
    let certificationNum = (document.getElementById("certification_num") as HTMLInputElement).value;
    let ceoId = (document.getElementById("ceo_id") as HTMLInputElement).value;

    if (username == "" || password == "" || firstName == "" || lastName == "" || phone == "" || email == "" || level == "" || type == "" || certificationNum == "" || ceoId == "") {
      (document.getElementById("messages") as HTMLInputElement).innerHTML = "Please fill out all fields.";
      return;
    }

    let user = this.inspectorService.register(username, password, firstName, lastName, phone, email, Number(level), type, certificationNum, Number(ceoId));

    user.subscribe((data: any) => {
      if (data == null) {
        (document.getElementById("messages") as HTMLInputElement).innerHTML = "Username already exists or password does not meet requirements.";
      } else {
        sessionStorage.setItem("user", JSON.stringify(data));
        this.route.navigate(['/profile']);
      }
    });
  }
}
