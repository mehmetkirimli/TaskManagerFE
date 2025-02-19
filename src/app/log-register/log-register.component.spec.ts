import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRegisterComponent } from '../navbar/log-register.component';

describe('LogRegisterComponent', () => {
  let component: LogRegisterComponent;
  let fixture: ComponentFixture<LogRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
