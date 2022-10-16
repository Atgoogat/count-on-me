import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckForUpdateComponent } from './check-for-update.component';

describe('CheckForUpdateComponent', () => {
  let component: CheckForUpdateComponent;
  let fixture: ComponentFixture<CheckForUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckForUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckForUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
