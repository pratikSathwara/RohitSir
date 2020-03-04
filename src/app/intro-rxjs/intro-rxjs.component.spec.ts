import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroRxjsComponent } from './intro-rxjs.component';

describe('IntroRxjsComponent', () => {
  let component: IntroRxjsComponent;
  let fixture: ComponentFixture<IntroRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
