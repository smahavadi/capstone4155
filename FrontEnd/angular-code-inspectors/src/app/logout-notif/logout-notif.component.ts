import { Component, OnInit } from '@angular/core';
import {logout} from "../session";

@Component({
  selector: 'app-logout-notif',
  templateUrl: './logout-notif.component.html',
  styleUrls: ['./logout-notif.component.css']
})
export class LogoutNotifComponent implements OnInit {

  constructor() {
    logout();
  }

  ngOnInit(): void {
  }

}
