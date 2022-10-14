import { Component, OnInit } from '@angular/core'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { Bookmark } from '../model/bookmark'
import { BookmarkState } from '../state/bookmark.state'

@Component({
  selector: 'app-recently-used',
  templateUrl: './recently-used.component.html',
  styleUrls: ['./recently-used.component.sass'],
})
export class RecentlyUsedComponent implements OnInit {
  @Select(BookmarkState.bookmarks)
  bookmarks$!: Observable<Bookmark[]>

  constructor(private readonly store: Store) {}

  ngOnInit(): void {}
}
