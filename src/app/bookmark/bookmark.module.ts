import { SiteModule } from './../site/site.module'
import { MatListModule } from '@angular/material/list'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NewBookmarkComponent } from './new-bookmark/new-bookmark.component'
import { BookmarkDetailWrapperComponent } from './bookmark-detail-wrapper/bookmark-detail-wrapper.component'
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component'
import { BookmarkRoutingModule } from './bookmark-routing.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    BookmarkDetailComponent,
    BookmarkDetailWrapperComponent,
    NewBookmarkComponent,
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule,
    FormsModule,
    SiteModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class BookmarkModule {}
