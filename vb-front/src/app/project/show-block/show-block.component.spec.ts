import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBlockComponent } from './show-block.component';

describe('ShowBlockComponent', () => {
  let component: ShowBlockComponent;
  let fixture: ComponentFixture<ShowBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
