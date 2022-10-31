import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionNotifComponent } from './submission-notif.component';

describe('SubmissionNotifComponent', () => {
  let component: SubmissionNotifComponent;
  let fixture: ComponentFixture<SubmissionNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionNotifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
