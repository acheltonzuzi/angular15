import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksIniciadasComponent } from './tasks-iniciadas.component';

describe('TasksIniciadasComponent', () => {
  let component: TasksIniciadasComponent;
  let fixture: ComponentFixture<TasksIniciadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksIniciadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksIniciadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
