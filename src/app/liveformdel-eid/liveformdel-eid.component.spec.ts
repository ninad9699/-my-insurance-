import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveformdelEidComponent } from './liveformdel-eid.component';

describe('LiveformdelEidComponent', () => {
  let component: LiveformdelEidComponent;
  let fixture: ComponentFixture<LiveformdelEidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveformdelEidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveformdelEidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
