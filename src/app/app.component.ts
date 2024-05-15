import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { setBackgroungDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { BetterhighlightDirective } from './CustomDirective/betterhighlight.directive';
import { ClassDirective } from './CustomDirective/class.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, setBackgroungDirective, HighlightDirective, HoverDirective, BetterhighlightDirective, ClassDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomDirectives';
}
