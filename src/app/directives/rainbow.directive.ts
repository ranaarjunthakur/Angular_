import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective implements OnInit  {

  constructor() { }


  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ]

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string
  @HostBinding('style.font-weight')  fontWeight ! : string
  @HostBinding('style.border')  border ! : string



  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length)
    this.color = this.borderColor = this.possibleColors[colorPick]
  }

  @HostListener('mouseover') onMouseOver(){
    this.color='green'
    // console.log("Mouse over")
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.color='',
    this.border = '';
    // console.log("Mouse leave")
  }

  // @HostBinding('class.active')
  // @HostBinding('disabled')
  // @HostBinding('attr.role')

  ngOnInit(): void {
    this.fontWeight= '500'
  }

}
