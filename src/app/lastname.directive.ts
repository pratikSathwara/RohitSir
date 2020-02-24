import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLastname]'
})
export class LastnameDirective {

  constructor(elem2:ElementRef, rend2:Renderer2) {

    elem2.nativeElement.innerText="Arvindbhai";
    elem2.nativeElement.style.color="green";
    // rend2.setStyle(elem2.nativeElement, 'color', 'red');
    rend2.setStyle(elem2.nativeElement, 'font-size', '15px');
    rend2.setStyle(elem2.nativeElement, 'font-weight', '700');
   }

}
