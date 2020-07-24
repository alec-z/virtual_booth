import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteProjectReverseComponent } from './promote-project-reverse.component';

describe('PromoteProjectReverseComponent', () => {
  let component: PromoteProjectReverseComponent;
  let fixture: ComponentFixture<PromoteProjectReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoteProjectReverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteProjectReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
