import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {isLoggedIn} from "../session";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn(): boolean {
    return isLoggedIn();
  }

  constructor(protected route: Router) { }

  ngOnInit(): void {
  }

  search() {
    const query = (document.getElementById("search") as HTMLInputElement).value;
    this.route.navigate(['/inspectors'], {queryParams: {query: query}});
  }
}
