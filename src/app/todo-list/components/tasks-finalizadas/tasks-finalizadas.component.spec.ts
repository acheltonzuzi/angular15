import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksFinalizadasComponent } from './tasks-finalizadas.component';

describe('TasksFinalizadasComponent', () => {
  let component: TasksFinalizadasComponent;
  let fixture: ComponentFixture<TasksFinalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksFinalizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksFinalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
