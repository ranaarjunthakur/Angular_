import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string = 'transparent'
  @Input() highlightColor:string= 'grey'

  constructor(private elref: ElementRef  ,private renderer:Renderer2) { }
  

  ngOnInit(): void {
    this.renderer.setStyle(this.elref.nativeElement, 'backgroundColor','grey')
  }

  @HostBinding('style.backgroundColor') backgroundColor :string = this.defaultColor;

  @HostListener('mouseover') mouseOver(eventData:Event){
    // this.renderer.setStyle(this.elref.nativeElement, 'backgroundColor','grey')
    // this.backgroundColor='grey'
    this.backgroundColor= this.highlightColor

  }

  @HostListener('mouseout') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elref.nativeElement, 'backgroundColor','transparent')
    // this.backgroundColor='transparent'
    this.backgroundColor= this.defaultColor

  }

}
