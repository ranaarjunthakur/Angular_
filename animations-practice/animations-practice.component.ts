import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animations-practice',
  templateUrl: './animations-practice.component.html',
  styleUrls: ['./animations-practice.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),

      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),

      transition('normal<=>highlighted', animate(300)),
      // transition('highlighted=>normal',animate(800))
    ]),

    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),

      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),

      state('shrunken', style({
        'background-color': 'pink',
        transform: 'translateX(0) scale(0.5)'
      })),

      transition('normal <=> highlighted', animate(300)),
      transition('highlighted <=> normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])    // * is a wildcard transition character//
    ]),

    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)',
        cursor: 'pointer'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
          cursor: 'pointer'
        }),
        animate(300)]),

      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(100px)',
          cursor: 'pointer'
        }))]),
    ]),


  ]
})
export class AnimationsPracticeComponent implements OnInit {

  state = 'normal'
  wildState = 'normal'
  list = ['Milk', 'Sugar', 'Bread']

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal'
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal'

  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onAdd(item) {
    this.list.push(item)
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1)
  }

}
