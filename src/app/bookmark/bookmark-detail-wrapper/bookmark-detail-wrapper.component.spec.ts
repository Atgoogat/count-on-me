import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkDetailWrapperComponent } from './bookmark-detail-wrapper.component';

describe('BookmarkDetailWrapperComponent', () => {
  let component: BookmarkDetailWrapperComponent;
  let fixture: ComponentFixture<BookmarkDetailWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkDetailWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkDetailWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
