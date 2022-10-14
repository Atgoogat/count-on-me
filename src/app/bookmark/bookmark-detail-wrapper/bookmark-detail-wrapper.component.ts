import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngxs/store'
import { map, Observable } from 'rxjs'
import { Bookmark } from 'src/app/model/bookmark'
import { BookmarkState } from 'src/app/state/bookmark.state'

@Component({
  selector: 'app-bookmark-detail-wrapper',
  templateUrl: './bookmark-detail-wrapper.component.html',
  styleUrls: ['./bookmark-detail-wrapper.component.sass'],
})
export class BookmarkDetailWrapperComponent implements OnInit {
  bookmark$!: Observable<Bookmark>

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    const strId = this.route.snapshot.paramMap.get('id') ?? '-1'
    const id = parseInt(strId)

    this.bookmark$ = this.store.select(BookmarkState.bookmark(id))
  }
}
