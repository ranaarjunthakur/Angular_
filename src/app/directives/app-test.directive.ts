import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppTest]'
})
export class AppTestDirective {

  constructor(private el: ElementRef, private ren2: Renderer2) {
    this.ChangeBgColor('red')
    // this.ren2.setStyle(this.el.nativeElement, 'color', 'red')
    // this.ren2.setStyle(this.el.nativeElement, 'font-family', 'serif')
  }


  ChangeBgColor(color: string) {
    this.ren2.setStyle(this.el.nativeElement, 'color', color)
    this.ren2.setStyle(this.el.nativeElement, 'font-family', 'serif')
  }

  @HostListener('mouseover') onMouseover() {
    this.ren2.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ren2.setStyle(this.el.nativeElement, 'color', 'pink')
  }


  @HostBinding('style.background') backgroundColor!: string;

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'none';
  }
  
}
