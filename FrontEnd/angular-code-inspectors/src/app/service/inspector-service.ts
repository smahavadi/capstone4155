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

  register(username: string, password: string, firstName: string,
           lastName: string, phone: string, email: string, level: number, type: string,
           certificationNum: string, ceoId: number) {
    return this.http.post("http://localhost:8080/cci/inspector",
      {username: username, password: password, firstName: firstName, lastName: lastName,
        phone: phone, email: email, level: level, type: type, certificationNum: certificationNum,
        ceoId: ceoId},
      {headers: new HttpHeaders({'Content-Type': 'application/json'})},
    );
  }
}



