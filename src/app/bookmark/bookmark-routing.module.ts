import { BookmarkDetailWrapperComponent } from './bookmark-detail-wrapper/bookmark-detail-wrapper.component'
import { NewBookmarkComponent } from './new-bookmark/new-bookmark.component'
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: 'new',
    component: NewBookmarkComponent,
  },
  {
    path: ':id',
    component: BookmarkDetailWrapperComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkRoutingModule {}
