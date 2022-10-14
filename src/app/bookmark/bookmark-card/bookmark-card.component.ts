import { Component, HostListener, Input, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { Bookmark } from 'src/app/model/bookmark'
import { DeleteBookmark } from 'src/app/state/bookmark.actions'

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.sass'],
})
export class BookmarkCardComponent implements OnInit {
  @Input()
  bookmark!: Bookmark

  constructor(private readonly store: Store) {}

  ngOnInit(): void {}

  deleteBookmark() {
    this.store.dispatch(new DeleteBookmark(this.bookmark.id))
  }
}
