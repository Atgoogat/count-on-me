import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[click],[routerLink]',
})
export class ClickDirective {
  @HostBinding('class')
  class = 'app-pointer'

  constructor() {}
}
