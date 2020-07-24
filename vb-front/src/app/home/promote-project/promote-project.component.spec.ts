import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteProjectComponent } from './promote-project.component';

describe('PromoteProjectComponent', () => {
  let component: PromoteProjectComponent;
  let fixture: ComponentFixture<PromoteProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoteProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
