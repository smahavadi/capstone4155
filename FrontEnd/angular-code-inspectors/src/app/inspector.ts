export class Inspector {
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  level: number = 0;
  type: string = '';
  certificationNum: string = '';
  ceoId: number = 0;
  trade: string = '';
  employer: string = '';
  expirationDate: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zipCode: number = 0;
  county: string = '';
  slots: Slot[] | null = null;
  username: string | null = null;
  password: string | null = null;

  constructor(j: any) {
    this.id = j.id;
    this.firstName = j.firstName;
    this.lastName = j.lastName;
    this.phone = j.phone;
    this.email = j.email;
    this.level = j.level;
    this.type = j.type;
    this.certificationNum = j.certificationNum;
    this.ceoId = j.ceoId;
    this.trade = j.trade;
    this.employer = j.employer;
    this.expirationDate = j.expirationDate;
    this.address = j.address;
    this.city = j.city;
    this.state = j.state;
    this.zipCode = j.zipCode;
    this.county = j.county;
    this.slots = j.slots;
    this.username = j.username;
    this.password = j.password;
  }

  public pendingApplications(): Application[] {
    const applications = new Array<Application>();
    for (const slot of this?.slots || []) {
      if (slot.pendingApplications) {
        applications.push(...slot.pendingApplications);
      }
    }
    return applications;
  }

  public approvedApplications(): Application[] {
    const applications = new Array<Application>();
    for (const slot of this?.slots || []) {
      if (slot.approvedApplication) {
        applications.push(slot.approvedApplication);
      }
    }
    return applications;
  }

  public reminderApplications(): Application[] {
    return this.approvedApplications().filter(a => new Date(a.time) > new Date());
  }
}

export class Slot {
  startTime: string = '';
  endTime: string = '';
  approvedApplication: Application | null = null;
  pendingApplications: Application[] | null = null;
}

export class Application {
  id: string = '';
  name: string = '';
  phone: string = '';
  email: string = '';
  inspectionType: string = '';
  address: string = '';
  notes: string = '';
  time: string = '';
}
