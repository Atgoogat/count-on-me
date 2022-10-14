import { Id } from './type/id.type'

export type Bookmark = Readonly<{
  id: Id
  bookTitle: string
  page: number
  totalPages?: number
  created: string | Date
  updated: string | Date
}>

export type NewBookmark = Pick<Bookmark, 'bookTitle' | 'page' | 'totalPages'>
