import { Injectable } from '@angular/core'
import { __core_private_testing_placeholder__ } from '@angular/core/testing'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store'
import { Bookmark } from '../model/bookmark'
import { Id } from '../model/type/id.type'
import { IdService } from '../services/id.service'
import { convertNullValuesToUndefined } from '../util/null-to-undef.util'
import {
  AddNewBookmark,
  DeleteBookmark,
  UndoBookmarkDeletion,
  UpdateBookmarkPage,
} from './bookmark.actions'

export type BookmarkStateModel = Readonly<{
  bookmarks: Bookmark[]
}>

const defaultState: BookmarkStateModel = {
  bookmarks: [],
}

@State<BookmarkStateModel>({
  name: 'bookmark',
  defaults: defaultState,
})
@Injectable()
export class BookmarkState {
  @Selector()
  static bookmarks(state: BookmarkStateModel) {
    return state.bookmarks
  }

  static bookmark(id: Id) {
    return createSelector(
      [BookmarkState.bookmarks],
      (bookmarks: Bookmark[]) => {
        const bookmark = bookmarks.find(b => b.id === id)
        if (bookmark === undefined) {
          throw new Error('expected to find a bookmark')
        }
        return bookmark
      }
    )
  }

  @Action(AddNewBookmark)
  addNewBookmark(
    ctx: StateContext<BookmarkStateModel>,
    action: AddNewBookmark
  ) {
    const id = this.idService.getUniqueId()
    const bookmarks = [
      ...ctx.getState().bookmarks,
      <Bookmark>{
        id,
        ...action.newBookmark,
        created: new Date(),
        updated: new Date(),
      },
    ]
    ctx.patchState({ bookmarks })
  }

  @Action(UpdateBookmarkPage)
  updateBookmarkPage(
    ctx: StateContext<BookmarkStateModel>,
    action: UpdateBookmarkPage
  ) {
    const { bookmarks } = ctx.getState()
    const bookmarkIndex = bookmarks.findIndex(b => b.id === action.id)
    if (bookmarkIndex === -1) {
      throw new Error('expected to find an bookmark with id ' + action.id)
    }
    const newBookmark = {
      ...bookmarks[bookmarkIndex],
      page: action.page,
      updated: new Date(),
    }
    const newBookmarks = bookmarks.slice()
    newBookmarks[bookmarkIndex] = newBookmark
    ctx.patchState({ bookmarks: newBookmarks })
  }

  @Action(DeleteBookmark)
  deleteBookmark(
    ctx: StateContext<BookmarkStateModel>,
    action: DeleteBookmark
  ) {
    let { bookmarks } = ctx.getState()
    bookmarks = bookmarks.slice()
    const bookmarkIndex = bookmarks.findIndex(b => b.id === action.id)
    const bookmark = bookmarks[bookmarkIndex]

    bookmarks.splice(bookmarkIndex, 1)
    ctx.patchState({ bookmarks })

    const sb = this.snackBar.open('Undo delete?', 'Undo', {
      duration: 3500,
    })
    sb.onAction().subscribe(() => {
      ctx.dispatch(new UndoBookmarkDeletion(bookmark))
    })
  }

  @Action(UndoBookmarkDeletion)
  undoBookmarkDeletion(
    ctx: StateContext<BookmarkStateModel>,
    action: UndoBookmarkDeletion
  ) {
    const { bookmarks } = ctx.getState()
    ctx.patchState({ bookmarks: [...bookmarks, action.bookmark] })
  }

  constructor(
    private readonly idService: IdService,
    private readonly snackBar: MatSnackBar
  ) {}
}
