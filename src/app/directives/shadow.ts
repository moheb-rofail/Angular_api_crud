import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShadow]',
  host: {
    '(mouseover)': 'onmouseenter()',
    '(mouseout)': 'onmouseleave()',
  },
})
export class Shadow {

  constructor(private ele: ElementRef) {
  }
  onmouseenter() {
    this.ele.nativeElement.style.boxShadow = '2px 2px 5px gray';
  }
  onmouseleave() {
    this.ele.nativeElement.style.boxShadow = 'none';
  }

}
