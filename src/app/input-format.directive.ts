import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {

  constructor() {

  }

  @HostListener('onBlur') onBlur() {
    console.log("on blur done")
  }

  // @HostListener('onFocus') onFocus() {
  //   console.log("on focus done ")
  // }

}
