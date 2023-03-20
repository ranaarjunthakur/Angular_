import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elref:ElementRef) { }


  ngOnInit(): void {
    this.elref.nativeElement.style.backgroundColor='green'
    this.elref.nativeElement.style.color='#fff'
  }

}
