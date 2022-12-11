import {Component, OnInit, TemplateRef} from '@angular/core';
import {InspectorService} from '../service/inspector-service';
import {getLoginData, setLoginData} from "../session";
import {Application, Inspector} from "../inspector";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {EventColor} from "calendar-utils";
import {
  startOfDay,
  endOfDay,
  isSameDay,
  isSameMonth,
  startOfHour, addHours,
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

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
  selector: 'app-inspector-profile',
  templateUrl: './inspector-profile.component.html',
  styleUrls: ['./inspector-profile.component.css']
})
export class InspectorProfileComponent implements OnInit {

  inspector: Inspector | null = getLoginData();
  selectedApplication: Application | null = null;
  selectedApplicationIsApproved: boolean = false;
  applicationModalDisplayStyle: string = 'none';
  addEventModalStartTime: Date = new Date();
  addEventModalEndTime: Date = new Date();
  addEventModalDisplayStyle: string = 'none';

  // Calendar
  viewDate: Date = new Date();
  errorMessage: string = '';
  successMessage: string = '';

  actions: CalendarEventAction[] = [
    {
      label: '<i class="bi bi-trash3-fill"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.removeEventSlot(event);
      },
    },
  ];

  events: CalendarEvent[] = [];
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  refresh = new Subject<void>();
  activeDayIsOpen: boolean = true;
  private lastClickTime: Date = new Date();

  constructor(private inspectorService: InspectorService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.inspector) {
      this.router.navigate(['/login']);
    }
    updateInspector(this.inspectorService, this.inspector, () => {
      this.inspector = getLoginData();
      this.updateCalendar();
    });
    this.inspector = getLoginData();
    this.updateCalendar();
  }

  private updateCalendar() {
    this.events = [];
    if (this.inspector?.slots != null) {
      this.inspector.slots.forEach((slot) => {
        this.events.push({
          start: new Date(slot.startTime),
          end: new Date(slot.endTime),
          title: `${new Date(slot.startTime).toLocaleString()} - ${new Date(slot.endTime).toLocaleString()}`,
          color: {...colors['blue']},
          actions: this.actions,
        })
      })
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen) ||
        events.length === 0);
      this.viewDate = date;
    }
    this.openAddEventModalIfDoubleClicked();
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

  handleEvent(action: string, event: CalendarEvent): void {
  }

  acceptApplication(application: Application | null) {
    if (application) {
      let message = (document.getElementById("message") as HTMLInputElement).value;
      this.inspectorService.acceptApplication(this.inspector, application, message).subscribe(
        (data: any) => {
          console.log(data);
          updateInspector(this.inspectorService, this.inspector, () => {
            this.inspector = getLoginData();
            this.updateCalendar();
            this.closeModal();
            this.selectedApplication = null;
          });
        }
      );
    }
  }

  rejectApplication(application: Application | null) {
    if (application) {
      let message = (document.getElementById("message") as HTMLInputElement).value;
      this.inspectorService.rejectApplication(this.inspector, application, message).subscribe(
        (data: any) => {
          console.log(data);
          updateInspector(this.inspectorService, this.inspector, () => {
            this.inspector = getLoginData();
            this.updateCalendar();
            this.closeModal();
            this.selectedApplication = null;
          });
        }
      );
    }
  }

  viewApplication(application: Application | null, approved: boolean = false) {
    this.selectedApplication = application;
    this.selectedApplicationIsApproved = approved;
    this.applicationModalDisplayStyle = 'block';

  }

  closeModal() {
    this.applicationModalDisplayStyle = 'none';
    this.selectedApplication = null;
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  openAddEventModal(): void {
    const selectedDate = this.viewDate;
    const startTime = startOfHour(selectedDate);
    const endTime = startOfHour(addHours(startTime, 1));
    this.addEventModalStartTime = startTime;
    this.addEventModalEndTime = endTime;
    this.addEventModalDisplayStyle = 'block';
  }

  addEvent(): void {
    this.inspectorService.addSlot(this.inspector, this.addEventModalStartTime, this.addEventModalEndTime).subscribe(
      (data: any) => {
        updateInspector(this.inspectorService, this.inspector, () => {
          this.inspector = getLoginData();
          this.updateCalendar();
          this.closeAddEventModal();
          this.errorMessage = '';
        });
      },
      (error: any) => {
        // if the status is 409 conflict, then the slot already exists
        if (error.status === 409) {
          this.errorMessage = 'Availability already exists for this start time';
        } else {
          this.errorMessage = 'Error adding availability';
        }
      }
    );
  }

  updateAddEventModalStartTime($event: Event) {
    const startTime = (document.getElementById("startTime") as HTMLInputElement).value;
    this.addEventModalStartTime = new Date(startTime);
  }

  updateAddEventModalEndTime($event: Event) {
    const endTime = (document.getElementById("endTime") as HTMLInputElement).value;
    this.addEventModalEndTime = new Date(endTime);
  }

  closeAddEventModal(): void {
    this.addEventModalDisplayStyle = 'none';
  }

  toDateString(date: Date): string {
    return (date.getFullYear().toString() + '-'
        + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
        + ("0" + (date.getDate())).slice(-2))
      + 'T' + date.toTimeString().slice(0,5);
  }


  private openAddEventModalIfDoubleClicked() {
    const currentClickTime = new Date();
    if (currentClickTime.getTime() - this.lastClickTime.getTime() < 500) {
      this.openAddEventModal();
    }
    this.lastClickTime = currentClickTime;
  }

  hourSegmentClicked($event: { date: Date; sourceEvent: MouseEvent }) {
    if (isSameMonth($event?.date, this.viewDate)) {
      this.viewDate = $event?.date;
    }
    this.openAddEventModalIfDoubleClicked();
  }

  private removeEventSlot(event: CalendarEvent<any>) {
    // prompt user to confirm
    if (confirm(`Are you sure you want to delete the availability "${event.title}"? This will also delete all applications for it, approved or not.`)) {
      this.inspectorService.removeSlot(this.inspector, event.start, event.end).subscribe(
        (data: any) => {
          if (data !== null) {
            updateInspector(this.inspectorService, this.inspector, () => {
              this.inspector = getLoginData();
              this.updateCalendar();
            });
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}

function updateInspector(inspectorService: InspectorService, inspector: Inspector | null, callback?: () => void) {
  let user = inspectorService.getInspectorByUsernameAndPassword(inspector?.username || "", inspector?.password || "");
  user.subscribe((data: any) => {
    data.username = inspector?.username;
    data.password = inspector?.password;
    setLoginData(data);
    if (callback) {
      callback();
    }
  });
}
