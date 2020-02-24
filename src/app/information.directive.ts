import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInformation]'
})
export class InformationDirective {

  constructor(elem3:ElementRef, render3:Renderer2) { 

    elem3.nativeElement.innerText="Customer informtion";
    render3.setStyle(elem3.nativeElement, 'text-align', 'center');
    render3.setStyle(elem3.nativeElement, 'color', 'red');
    render3.setStyle(elem3.nativeElement, 'font-weight', '700');
    
  }

}
