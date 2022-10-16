import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RecentlyUsedComponent } from './recently-used/recently-used.component'

const routes: Routes = [
  {
    path: '',
    component: RecentlyUsedComponent,
  },
  {
    path: 'bookmark',
    loadChildren: () =>
      import('./bookmark/bookmark.module').then(m => m.BookmarkModule),
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./update/update.module').then(m => m.UpdateModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
