import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: true
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @Input() set appStyle(styles: Object){
    let entries = Object.entries(styles);
    for(let [property, value] of entries){
      this.renderer.setStyle(this.element.nativeElement, property, value);
    }
  }

}
