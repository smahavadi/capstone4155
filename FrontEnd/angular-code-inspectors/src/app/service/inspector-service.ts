import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class InspectorService {

  constructor(private http: HttpClient) {
  }

  getInspectors() {
    return this.http.post("http://localhost:8080/cci/inspectors",
      {},
      {headers: new HttpHeaders({'Content-Type': 'application/json'})},
    );
  }

  getInspectorByUsernameAndPassword(username: string, password: string) {
    return this.http.post("http://localhost:8080/cci/inspector/login",
      {username: username, password: password},
      {headers: new HttpHeaders({'Content-Type': 'application/json'})},
    );
  }

  getInspectorById(id: string) {
    return this.http.get("http://localhost:8080/cci/inspector?id=" + id);
  }

  getInspectorsByQuery(query: string) {
    // TODO: Proximity search based on address

    // if it's a zipcode (xxxxx or xxxxx-xxxx), search by zipcode
    if (query.match(/^\d{5}(?:[-\s]\d{4})?$/)) {
      // get the first 5 digits of the zipcode
      let zipcode = query.substring(0, 5);
      return this.http.post("http://localhost:8080/cci/inspectors",
        {zipCode: Number(zipcode)},
        {headers: new HttpHeaders({'Content-Type': 'application/json'})},
      );
    }
    // otherwise, return all inspectors
    return this.getInspectors();
  }

  register(username: string, password: string, firstName: string,
           lastName: string, phone: string, email: string, level: number, type: string,
           certificationNum: string, ceoId: number) {
    return this.http.post("http://localhost:8080/cci/inspector",
      {
        username: username, password: password, firstName: firstName, lastName: lastName,
        phone: phone, email: email, level: level, type: type, certificationNum: certificationNum,
        ceoId: ceoId
      },
      {headers: new HttpHeaders({'Content-Type': 'application/json'})},
    );
  }

  scheduleInspection(id: string,
                     nameInput: string,
                     phoneInput: string,
                     emailInput: string,
                     inspectionTypeInput: string,
                     addressInput: string,
                     timeInput: string,
                     notesInput: string) {
    return this.http.post("http://localhost:8080/cci/inspector/schedule",
      {
        id: id,
        name: nameInput,
        phone: phoneInput,
        email: emailInput,
        inspectionType: inspectionTypeInput,
        address: addressInput,
        time: new Date(timeInput),
        notes: notesInput
      },
      {headers: new HttpHeaders({'Content-Type': 'application/json'})},
    );
  }

  acceptApplication(inspector: any, application: any, message: string) {
    return this.http.post("http://localhost:8080/cci/inspector/accept",
      {
        inspector: inspector,
        application: application,
        message: message
      },
      {headers: new HttpHeaders({'Content-Type': 'application/json'})},
    );
  }

  rejectApplication(inspector: any, application: any, message: string) {
    return this.http.post("http://localhost:8080/cci/inspector/reject",
      {
        inspector: inspector,
        application: application,
        message: message
      },
      {headers: new HttpHeaders({'Content-Type': 'application/json'})},
    );
  }
}



