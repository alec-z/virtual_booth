import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixNavComponent } from './fix-nav.component';

describe('FixNavComponent', () => {
  let component: FixNavComponent;
  let fixture: ComponentFixture<FixNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
