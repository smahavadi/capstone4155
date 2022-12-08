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
}

export class Slot {
  startTime: string = '';
  endTime: string = '';
  approvedApplication: Application | null = null;
  pendingApplications: Application[] | null = null;
}

export class Application {
  name: string = '';
  phone: string = '';
  email: string = '';
  inspectionType: string = '';
  address: string = '';
  notes: string = '';
}
