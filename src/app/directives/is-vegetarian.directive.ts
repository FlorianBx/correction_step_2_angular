import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsVegetarian]',
  standalone: true
})
export class IsVegetarianDirective implements OnChanges {
  @Input() appIsVegetarian: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.appIsVegetarian) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    }
  }
}
