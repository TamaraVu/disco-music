import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTenComponent } from './lesson-ten.component';

describe('LessonTenComponent', () => {
  let component: LessonTenComponent;
  let fixture: ComponentFixture<LessonTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
