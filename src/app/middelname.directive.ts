import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiddelname]'
})
export class MiddelnameDirective {

  constructor(elem1:ElementRef, rende1:Renderer2) {

    elem1.nativeElement.innerText="Pragnesh";
    rende1.setStyle(elem1.nativeElement, 'color', '#fff');
    rende1.setStyle(elem1.nativeElement, 'background-color', '#CD5C5C');
    rende1.setStyle(elem1.nativeElement, 'font-size', '15px');
    rende1.setStyle(elem1.nativeElement, 'font-weight', '700');
   }

}
