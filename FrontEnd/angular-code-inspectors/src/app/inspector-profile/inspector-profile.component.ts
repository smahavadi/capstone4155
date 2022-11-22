import { Component, OnInit } from '@angular/core';
import { InspectorService } from '../service/inspector-service';

@Component({
  selector: 'app-inspector-profile',
  templateUrl: './inspector-profile.component.html',
  styleUrls: ['./inspector-profile.component.css']
})
export class InspectorProfileComponent implements OnInit {

  constructor(private inspectorService: InspectorService) { }
  
  ngOnInit(): void {
    this.inspectorService.getInspectors().subscribe((data)=>{
      console.log(data, "data");
    });
  }

}
