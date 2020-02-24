import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirect]'
})
export class MydirectDirective {

  constructor(elem:ElementRef, Rende:Renderer2) { 

    
    elem.nativeElement.innerText="Kadia";
    Rende.setStyle(elem.nativeElement, 'color', 'green');
    Rende.setStyle(elem.nativeElement, 'font-size', '15px');
    Rende.setStyle(elem.nativeElement, 'font-weight', '700');
    Rende.setStyle(elem.nativeElement, 'background-color', '#F08080');
  }

}
