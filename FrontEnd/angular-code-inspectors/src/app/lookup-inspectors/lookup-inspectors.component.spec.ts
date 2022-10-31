import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupInspectorsComponent } from './lookup-inspectors.component';

describe('LookupInspectorsComponent', () => {
  let component: LookupInspectorsComponent;
  let fixture: ComponentFixture<LookupInspectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupInspectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookupInspectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
