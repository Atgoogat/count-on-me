import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PromtUpdateService } from './promt-update.service'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { CheckForUpdateComponent } from './check-for-update/check-for-update.component'
import { UpdateRoutingModule } from './update-routing.module'
import { SiteModule } from '../site/site.module'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [CheckForUpdateComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    SiteModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [PromtUpdateService],
})
export class UpdateModule {}
