import { NgModule } from '@angular/core'
import { Router, RouterModule, Routes } from '@angular/router'
import { CheckForUpdateComponent } from './check-for-update/check-for-update.component'

const routes: Routes = [
  {
    path: 'check-for-update',
    component: CheckForUpdateComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRoutingModule {}
