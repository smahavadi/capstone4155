import { Injectable } from '@angular/core';
import { InspectorListComponent } from "../inspectorlist/inspector-list.component"
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class InspectorService {

constructor(private http:HttpClient) {}
    getInspectors() {
        return this.http.get("http://localhost:8080/cci/inspectors");
    }
}

