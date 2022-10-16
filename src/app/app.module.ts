import { BookmarkCardComponent } from './bookmark/bookmark-card/bookmark-card.component'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BookmarkModule } from './bookmark/bookmark.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { NgxsModule } from '@ngxs/store'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { IdStorageProvider } from './app.tokens'
import { BookmarkState } from './state/bookmark.state'

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatToolbarModule } from '@angular/material/toolbar'

import { LayoutModule } from '@angular/cdk/layout'
import { MatListModule } from '@angular/material/list'
import { NavFrameComponent } from './nav/nav-frame/nav-frame.component'
import { RecentlyUsedComponent } from './recently-used/recently-used.component'
import { SiteModule } from './site/site.module'

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatListModule,
]

@NgModule({
  declarations: [AppComponent, RecentlyUsedComponent, NavFrameComponent],
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

    ...matModules,
    LayoutModule,
    SiteModule,
    BookmarkCardComponent,
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
