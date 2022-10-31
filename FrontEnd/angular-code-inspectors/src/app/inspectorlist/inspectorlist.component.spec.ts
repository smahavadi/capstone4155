import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorlistComponent } from './inspectorlist.component';

describe('InspectorlistComponent', () => {
  let component: InspectorlistComponent;
  let fixture: ComponentFixture<InspectorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
