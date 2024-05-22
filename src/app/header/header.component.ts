import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isColorIsRed = true;
}
