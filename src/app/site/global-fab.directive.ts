import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[appGlobalFab]',
})
export class GlobalFabDirective {
  @HostBinding('class')
  class = 'app-global-fab'

  constructor() {}
}
