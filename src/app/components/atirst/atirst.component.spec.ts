import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtirstComponent } from './atirst.component';

describe('AtirstComponent', () => {
  let component: AtirstComponent;
  let fixture: ComponentFixture<AtirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
