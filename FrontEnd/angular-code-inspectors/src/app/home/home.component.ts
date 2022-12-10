import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {isLoggedIn} from "../session";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean = isLoggedIn();

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  toRegister(): void {
    // this.router.navigate(['/home/register']);
    this.router.navigateByUrl('/home/register');
  }

}
