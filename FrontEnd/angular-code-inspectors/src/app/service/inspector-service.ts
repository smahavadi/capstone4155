import { Injectable } from '@angular/core';
import { InspectorlistComponent } from "../inspectorlist/inspectorlist.component"
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class InspectorService { 
    
constructor(private http:HttpClient) {}
    getInspectors() {
        return this.http.get("http://localhost:8080/cci/inspectors");
    }
}

