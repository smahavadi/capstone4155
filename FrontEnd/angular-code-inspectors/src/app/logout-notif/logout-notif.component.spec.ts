import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutNotifComponent } from './logout-notif.component';

describe('LogoutNotifComponent', () => {
  let component: LogoutNotifComponent;
  let fixture: ComponentFixture<LogoutNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutNotifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
