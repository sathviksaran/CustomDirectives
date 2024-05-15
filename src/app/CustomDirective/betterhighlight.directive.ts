import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]',
  standalone: true
})
export class BetterhighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterhighlight') highlightColor: string = 'pink';
  @Input() title: string = 'This is title';

  @HostBinding('style.backgroundColor') backgroung: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';

  ngOnInit(){
    this.backgroung = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(){
    this.backgroung = this.highlightColor;
    this.border = 'red 2px solid';
  }

  @HostListener('mouseleave') mouseleave(){
    this.backgroung = this.defaultColor;
    this.border = 'none';
  }

}
