import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BookmarkDetailWrapperComponent } from './bookmark/bookmark-detail-wrapper/bookmark-detail-wrapper.component'
import { NewBookmarkComponent } from './bookmark/new-bookmark/new-bookmark.component'
import { RecentlyUsedComponent } from './recently-used/recently-used.component'

const routes: Routes = [
  {
    path: '',
    component: RecentlyUsedComponent,
  },
  {
    path: 'bookmark',
    children: [
      {
        path: 'new',
        component: NewBookmarkComponent,
      },
      {
        path: ':id',
        component: BookmarkDetailWrapperComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
