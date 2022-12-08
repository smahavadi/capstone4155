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
  pendingRequests: PendingRequest[] | null = null;
  upcomingReminders: UpcomingReminder[] | null = null;
}

export class PendingRequest {
}

export class UpcomingReminder {
}
