import {Component, OnInit} from '@angular/core';
import {InspectorService} from '../service/inspector-service';
import {getLoginData, setLoginData} from "../session";
import {Application, Inspector} from "../inspector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inspector-profile',
  templateUrl: './inspector-profile.component.html',
  styleUrls: ['./inspector-profile.component.css']
})
export class InspectorProfileComponent implements OnInit {

  inspector: Inspector | null = getLoginData();
  selectedApplication: Application | null = null;
  displayStyle: string = 'none';

  constructor(private inspectorService: InspectorService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.inspector) {
      this.router.navigate(['/login']);
    }
    updateInspector(this.inspectorService, this.inspector, () => {
      this.inspector = getLoginData();
    });
    this.inspector = getLoginData();
  }

  acceptApplication(application: Application | null) {
    if (application) {
      let message = (document.getElementById("message") as HTMLInputElement).value;
      this.inspectorService.acceptApplication(this.inspector, application, message).subscribe(
        (data: any) => {
          console.log(data);
          updateInspector(this.inspectorService, this.inspector, () => {
            this.inspector = getLoginData();
            this.closeModal();
            this.selectedApplication = null;
          });
        }
      );
    }
  }

  rejectApplication(application: Application | null) {
    if (application) {
      let message = (document.getElementById("message") as HTMLInputElement).value;
      this.inspectorService.rejectApplication(this.inspector, application, message).subscribe(
        (data: any) => {
          console.log(data);
          updateInspector(this.inspectorService, this.inspector, () => {
            this.inspector = getLoginData();
            this.closeModal();
            this.selectedApplication = null;
          });
        }
      );
    }
  }

  viewApplication(application: Application | null) {
    this.selectedApplication = application;
    this.displayStyle = 'block';

  }

  closeModal() {
    this.displayStyle = 'none';
    this.selectedApplication = null;
  }
}

function updateInspector(inspectorService: InspectorService, inspector: Inspector | null, callback?: () => void) {
  let user = inspectorService.getInspectorByUsernameAndPassword(inspector?.username || "", inspector?.password || "");
  user.subscribe((data: any) => {
    data.username = inspector?.username;
    data.password = inspector?.password;
    setLoginData(data);
    if (callback) {
      callback();
    }
  });
}
