import { Component, OnInit } from '@angular/core'
import { SwUpdate } from '@angular/service-worker'

@Component({
  selector: 'app-check-for-update',
  templateUrl: './check-for-update.component.html',
  styleUrls: ['./check-for-update.component.sass'],
})
export class CheckForUpdateComponent implements OnInit {
  loading = false
  result?: { msg?: string; error?: string }

  constructor(private readonly swUpdate: SwUpdate) {}

  ngOnInit(): void {}

  checkForUpdate() {
    this.loading = true

    this.swUpdate
      .checkForUpdate()
      .then(
        () => {
          this.result = { msg: 'A new version is available' }
        },
        e => {
          console.error(e)
          this.result = { error: 'An error occured' }
        }
      )
      .finally(() => (this.loading = false))
  }

  applyUpdate() {
    document.location.reload()
  }
}
