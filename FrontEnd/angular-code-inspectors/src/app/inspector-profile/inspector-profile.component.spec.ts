import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorProfileComponent } from './inspector-profile.component';

describe('InspectorProfileComponent', () => {
  let component: InspectorProfileComponent;
  let fixture: ComponentFixture<InspectorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
