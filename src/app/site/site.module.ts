import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SafeAreaComponent } from './safe-area/safe-area.component'
import { ClickDirective } from './click.directive'
import { ClickWithoutPropagationDirective } from './click-without-propagation.directive'
import { GlobalFabDirective } from './global-fab.directive'
import { SortPipe } from './sort.pipe'

@NgModule({
  declarations: [
    SafeAreaComponent,
    ClickDirective,
    ClickWithoutPropagationDirective,
    GlobalFabDirective,
    SortPipe,
  ],
  imports: [CommonModule],
  exports: [
    SafeAreaComponent,
    ClickDirective,
    ClickWithoutPropagationDirective,
    GlobalFabDirective,
    SortPipe,
  ],
})
export class SiteModule {}
