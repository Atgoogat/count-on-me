import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { NgxsModule } from '@ngxs/store'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { IdStorageProvider } from './app.tokens'
import { BookmarkCardComponent } from './bookmark/bookmark-card/bookmark-card.component'
import { BookmarkDetailComponent } from './bookmark/bookmark-detail/bookmark-detail.component'
import { NewBookmarkComponent } from './bookmark/new-bookmark/new-bookmark.component'
import { BookmarkState } from './state/bookmark.state'
import { GlobalFabDirective } from './site/global-fab.directive'

import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { RecentlyUsedComponent } from './recently-used/recently-used.component'
import { BookmarkDetailWrapperComponent } from './bookmark/bookmark-detail-wrapper/bookmark-detail-wrapper.component'
import { ClickDirective } from './site/click.directive'
import { LayoutModule } from '@angular/cdk/layout'
import { MatListModule } from '@angular/material/list'
import { NavFrameComponent } from './nav/nav-frame/nav-frame.component'
import { SafeAreaComponent } from './site/safe-area/safe-area.component'
import { SortPipe } from './site/sort.pipe';
import { ClickWithoutPropagationDirective } from './site/click-without-propagation.directive'

const matModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSnackBarModule,
]

@NgModule({
  declarations: [
    AppComponent,
    NewBookmarkComponent,
    BookmarkDetailComponent,
    BookmarkCardComponent,
    GlobalFabDirective,
    RecentlyUsedComponent,
    BookmarkDetailWrapperComponent,
    ClickDirective,
    NavFrameComponent,
    SafeAreaComponent,
    SortPipe,
    ClickWithoutPropagationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    NgxsModule.forRoot([BookmarkState], {
      selectorOptions: { injectContainerState: false },
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: environment.appName,
      disabled: environment.production,
      maxAge: 25,
    }),
    NgxsStoragePluginModule.forRoot({
      key: [BookmarkState],
    }),
    FormsModule,
    ReactiveFormsModule,
    ...matModules,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    {
      provide: IdStorageProvider,
      useValue: localStorage,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
