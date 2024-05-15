import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { setBackgroungDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { BetterhighlightDirective } from './CustomDirective/betterhighlight.directive';
import { ClassDirective } from './CustomDirective/class.directive';
import { StyleDirective } from './CustomDirective/style.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, setBackgroungDirective, HighlightDirective, HoverDirective, BetterhighlightDirective, ClassDirective, StyleDirective, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomDirectives';

  active: boolean = false;

  display: boolean = false;

  DisplayNotice(){
    this.display = true;
  }
}
