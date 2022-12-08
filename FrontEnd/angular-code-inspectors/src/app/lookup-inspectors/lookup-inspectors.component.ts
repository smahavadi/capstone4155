import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lookup-inspectors',
  templateUrl: './lookup-inspectors.component.html',
  styleUrls: ['./lookup-inspectors.component.css']
})
export class LookupInspectorsComponent implements OnInit {

    constructor(protected route: ActivatedRoute) { }

    ngOnInit(): void {
    }

}
