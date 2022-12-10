import {Component, OnInit} from '@angular/core';
import {InspectorService} from '../service/inspector-service';
import {getLoginData, setLoginData} from "../session";
import {Inspector} from "../inspector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inspector-profile',
  templateUrl: './inspector-profile.component.html',
  styleUrls: ['./inspector-profile.component.css']
})
export class InspectorProfileComponent implements OnInit {

  inspector: Inspector | null = getLoginData();

  constructor(private inspectorService: InspectorService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.inspector) {
      this.router.navigate(['/login']);
    }
    updateInspector(this.inspectorService, this.inspector);
    this.inspector = getLoginData();
  }

}

function updateInspector(inspectorService: InspectorService, inspector: Inspector | null) {
  let user = inspectorService.getInspectorByUsernameAndPassword(inspector?.username || "", inspector?.password || "");
  user.subscribe((data: any) => {
    data.username = inspector?.username;
    data.password = inspector?.password;
    setLoginData(data);
  });
}
