import {Component, OnInit} from '@angular/core';
import {Inspector} from "../inspector";
import {ActivatedRoute, Router} from "@angular/router";
import {InspectorService} from "../service/inspector-service";

@Component({
  selector: 'app-inspector-list',
  templateUrl: './inspector-list.component.html',
  styleUrls: ['./inspector-list.component.css']
})
export class InspectorListComponent implements OnInit {
  inspectors: Inspector[] = [];
  loading: boolean = true;

  constructor(protected route: ActivatedRoute, private inspectorService: InspectorService) { }

  ngOnInit(): void {
    let query = this.route.snapshot.queryParams['query'];
    if (query == null) {
      return;
    }
    let searchBar = (document.getElementById("search") as HTMLInputElement);
    if (searchBar != null) {
      searchBar.value = query;
    }
    let apiInspectors = this.inspectorService.getInspectorsByQuery(query);
    apiInspectors.subscribe((data: any) => {
      // sort the data by level (lowest levels first)
      data.sort((a: Inspector, b: Inspector) => {
        return a.level - b.level;
      });
      this.inspectors = data;
      this.loading = false;
    });
  }

}
