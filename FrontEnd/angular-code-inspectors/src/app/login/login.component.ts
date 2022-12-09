import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {InspectorService} from "../service/inspector-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = "";

  constructor(protected route: Router, private inspectorService: InspectorService) { }

  ngOnInit(): void {
  }

  goToRegister() {
    this.route.navigate(['/register']);
  }

  login() {
    this.errorMessage = "";

    // get username and password from form
    let username = (document.getElementById("username") as HTMLInputElement).value;
    let password = (document.getElementById("password") as HTMLInputElement).value;

    // if either username or password is empty, return and display error message
    if (username == "" || password == "") {
      this.errorMessage = "Please enter a username and password.";
      return;
    }

    let user = this.inspectorService.getInspectorByUsernameAndPassword(username, password);
    user.subscribe((data: any) => {
      if (data == null) {
        this.errorMessage = "Invalid username or password.";
      } else {
        data.username = username;
        data.password = password;
        sessionStorage.setItem("user", JSON.stringify(data));
        this.route.navigate(['/profile']);
      }
    });
  }
}
