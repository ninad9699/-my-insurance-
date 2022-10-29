import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSoprComponent } from './rx-jsopr.component';

describe('RxJSoprComponent', () => {
  let component: RxJSoprComponent;
  let fixture: ComponentFixture<RxJSoprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJSoprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJSoprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
