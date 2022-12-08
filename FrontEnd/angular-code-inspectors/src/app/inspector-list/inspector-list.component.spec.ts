import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorListComponent } from './inspector-list.component';

describe('InspectorlistComponent', () => {
  let component: InspectorListComponent;
  let fixture: ComponentFixture<InspectorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
