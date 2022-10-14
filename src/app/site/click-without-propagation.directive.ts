import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appClickWithoutPropagation]',
})
export class ClickWithoutPropagationDirective {
  @HostListener('click', ['$event'])
  stopProp(event: MouseEvent) {
    event.stopPropagation()
  }

  constructor() {}
}
