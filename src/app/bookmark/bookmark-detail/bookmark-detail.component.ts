import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { Bookmark } from 'src/app/model/bookmark'
import { UpdateBookmarkPage } from 'src/app/state/bookmark.actions'
import { minmax } from 'src/app/util/minmax.util'

@Component({
  selector: 'app-bookmark-detail',
  templateUrl: './bookmark-detail.component.html',
  styleUrls: ['./bookmark-detail.component.sass'],
})
export class BookmarkDetailComponent implements OnInit {
  @Input()
  bookmark!: Bookmark

  constructor(private readonly store: Store) {}

  ngOnInit(): void {}

  isValidPage(page: number) {
    if (this.bookmark.totalPages !== undefined) {
      return (
        Number.isInteger(page) && page >= 0 && page <= this.bookmark.totalPages
      )
    }
    return Number.isInteger(page) && page >= 0
  }

  changePage(page: number) {
    this.store.dispatch(new UpdateBookmarkPage(this.bookmark.id, page))
  }
}
