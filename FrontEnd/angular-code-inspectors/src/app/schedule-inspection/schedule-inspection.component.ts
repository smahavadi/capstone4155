import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InspectorService} from "../service/inspector-service";
import {Inspector} from "../inspector";

@Component({
  selector: 'app-schedule-inspection',
  templateUrl: './schedule-inspection.component.html',
  styleUrls: ['./schedule-inspection.component.css']
})
export class ScheduleInspectionComponent implements OnInit {

  inspector: Inspector | null = null;

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              private inspectorService: InspectorService)  { }

  ngOnInit(): void {
    let id = this.route.snapshot.queryParams['id'];
    if (id == null) {
      this.router.navigate(['/home']);
    }
    let apiInspector = this.inspectorService.getInspectorById(id);
    apiInspector.subscribe((data: any) => {
      if (data == null) {
        this.router.navigate(['/home']);
      } else {
        this.inspector = data;
      }
    });
  }

}
