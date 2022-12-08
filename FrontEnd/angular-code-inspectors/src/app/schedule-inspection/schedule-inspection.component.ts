import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InspectorService} from "../service/inspector-service";
import {Inspector} from "../inspector";
import { Subject } from 'rxjs';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours, startOfHour,
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

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  events: CalendarEvent[] = [
    // {
    //   start: addHours(startOfHour(new Date()), 12),
    //   end: addHours(startOfHour(new Date()), 13),
    //   title: `${addHours(startOfHour(new Date()), 12).toLocaleString()} - ${addHours(startOfHour(new Date()), 13).toLocaleString()}`,
    //   color: { ...colors['blue'] },
    //   actions: this.actions,
    // },
  ];
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
    const timeInput = (document.getElementById('time') as HTMLInputElement);
    if (timeInput != null) {
      timeInput.value = event.start.toLocaleString();
    }
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
      },
    ];
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
