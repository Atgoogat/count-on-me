import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookmarkComponent } from './new-bookmark.component';

describe('NewBookmarkComponent', () => {
  let component: NewBookmarkComponent;
  let fixture: ComponentFixture<NewBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBookmarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
