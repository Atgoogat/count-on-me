import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker'
import { filter } from 'rxjs'

@Injectable()
export class PromtUpdateService {
  constructor(readonly swUpdate: SwUpdate, readonly snackBar: MatSnackBar) {
    swUpdate.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe(evt => {
        const sb = snackBar.open(
          `An Update from version ${evt.currentVersion} to version ${evt.latestVersion} is available. Should we reload the app now?`,
          'Reload',
          { duration: 3500 }
        )
        sb.onAction().subscribe(() => {
          document.location.reload()
        })
      })
  }
}
