import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InspectorService} from "../service/inspector-service";
import {Inspector} from "../inspector";
import { Subject } from 'rxjs';
import {
  startOfDay,
  endOfDay,
  isSameDay,
  isSameMonth,
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-schedule-inspection',
  templateUrl: './schedule-inspection.component.html',
  styleUrls: ['./schedule-inspection.component.css']
})
export class ScheduleInspectionComponent implements OnInit {

  inspector: Inspector | null = null;
  viewDate: Date = new Date();
  errorMessage: string = '';
  successMessage: string = '';

  actions: CalendarEventAction[] = [
  ];

  events: CalendarEvent[] = [];
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  refresh = new Subject<void>();
  activeDayIsOpen: boolean = true;

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              private inspectorService: InspectorService)  { }

  ngOnInit(): void {
    let id = this.route.snapshot.queryParams['id'];
    if (id == null) {
      this.router.navigate(['/home']);
    }
    let apiInspector = this.inspectorService.getInspectorById(id);
    apiInspector.subscribe((data: any) => {
      if (data == null) {
        this.router.navigate(['/home']);
      } else {
        this.inspector = data;
        this.events = [];
        if (this.inspector?.slots != null) {
          this.inspector.slots.forEach((slot) => {
            // if the slot has an approved inspection, skip it
            if (!!slot.approvedApplication) {
              return;
            }
            this.events.push({
              start: new Date(slot.startTime),
              end: new Date(slot.endTime),
              title: `${new Date(slot.startTime).toLocaleString()} - ${new Date(slot.endTime).toLocaleString()}`,
              color: { ...colors['blue'] },
              actions: this.actions,
            })
          })
        }
      }
    });
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    if (this.successMessage) {
      // Already submitted
      return;
    }
    const timeInput = (document.getElementById('time') as HTMLInputElement);
    if (timeInput != null) {
      timeInput.value = event.start.toLocaleString();
    }
  }

  schedule() {
    this.errorMessage = '';
    if (this.successMessage) {
      // Already submitted
      return;
    }
    const nameInput = (document.getElementById('name') as HTMLInputElement)?.value;
    const phoneInput = (document.getElementById('phone') as HTMLInputElement)?.value;
    const emailInput = (document.getElementById('email') as HTMLInputElement)?.value;
    const inspectionTypeInput = (document.getElementById('inspectionType') as HTMLInputElement)?.value;
    const addressInput = (document.getElementById('address') as HTMLInputElement)?.value;
    const timeInput = (document.getElementById('time') as HTMLInputElement)?.value;
    const notesInput = (document.getElementById('notes') as HTMLInputElement)?.value;

    if (nameInput == null || nameInput === '') {
      this.errorMessage = 'Please enter a name';
      return;
    }

    if (phoneInput == null || phoneInput === '') {
      this.errorMessage = 'Please enter a phone number';
      return;
    }

    if (emailInput == null || emailInput === '') {
      this.errorMessage = 'Please enter an email';
      return;
    }

    if (inspectionTypeInput == null || inspectionTypeInput === '') {
      this.errorMessage = 'Please enter an inspection type';
      return;
    }

    if (addressInput == null || addressInput === '') {
      this.errorMessage = 'Please enter an address';
      return;
    }

    if (timeInput == null || timeInput === '') {
      this.errorMessage = 'Please select a time';
      return;
    }

    this.inspectorService.scheduleInspection(this.inspector?.id || "",
      nameInput,
      phoneInput,
      emailInput,
      inspectionTypeInput,
      addressInput,
      timeInput,
      notesInput).subscribe((data: any) => {
      if (data == null) {
        this.errorMessage = 'Failed to schedule inspection';
      } else {
        this.successMessage = 'Your inspection request has been submitted. You will receive an email confirmation once your request has processed by the inspector.'
      }
    });
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd,
                    }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }
}
