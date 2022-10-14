import { Bookmark, NewBookmark } from '../model/bookmark'
import { Id } from '../model/type/id.type'

export class AddNewBookmark {
  static readonly type = '[Bookmark] add'
  constructor(public readonly newBookmark: NewBookmark) {}
}

export class UpdateBookmarkPage {
  static readonly type = '[Bookmark] update page'
  constructor(public readonly id: Id, public readonly page: number) {}
}

export class DeleteBookmark {
  static readonly type = '[Bookmark] delete'
  constructor(public readonly id: Id) {}
}

export class UndoBookmarkDeletion {
  static readonly type = '[Bookmark] undo delete'
  constructor(public readonly bookmark: Bookmark) {}
}
