import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DOMComponent implements AfterViewInit {


  sun = 'https://raw.githubusercontent.com/talohana/angular-dark-mode/master/src/assets/sun.svg'
  moon = 'https://raw.githubusercontent.com/talohana/angular-dark-mode/master/src/assets/moon.svg'
  show: boolean = true

  @ViewChild('ele') elementRef!: ElementRef
  @ViewChild('heading') heading!: ElementRef
  @ViewChild('img') img!: ElementRef


  constructor(private el: ElementRef) {

  }

  ngAfterViewInit(): void {

    ///////////////////////////////  1 - getting dom Elements  ///////////////////////


    ////////////  TODO: getElementById /////////////////

    const heading = document.getElementById('heading');
    console.log(heading)


    //////////// 1.1TODO: getElementsByTagName /////////////////

    const heading2 = document.getElementsByTagName('h1')
    console.log(heading2[0])

    ////////////TODO: getElementsByClassName /////////////////

    const heading3 = document.getElementsByClassName('heading')
    console.log(heading3)

    ////////////TODO: querySelctor **(best Method for getting node elements)/////////////////

    const heading4 = document.querySelector('#heading')
    const heading5 = document.querySelector('.heading')
    console.log(heading4, heading5)

    ////////////TODO: querySelctorAll  (get all nodes elements with classNAme or ID )/////////////////////

    const heading6 = document.querySelectorAll('#heading')
    console.log(heading6)


    ///////////////////////////////  2-Traverse  DOM ///////////////////////


    ////////////TODO: parentNode  (get parent Nodes)///////////////


    let child = document.querySelector('.child')
    let parent = child?.parentNode
    console.log(parent)

    ////////////TODO: childNode   (get child Nodes ) ///////////////


    let parent2 = document.querySelector('.parent')
    let childs = parent2?.childNodes
    console.log(childs)

    ////////////TODO: nextElementSibling   (get next sibling nodes or element ) ///////////////

    let childOfParent = document.querySelector('.child')

    let siblingElement = childOfParent?.nextSibling
    console.log(siblingElement)


    ////////////TODO: previousElementSibling   (get previous sibling nodes or element ) ///////////////

    let childOfParent1 = document.querySelector('.child')

    let previousSiblingElement = childOfParent1?.previousElementSibling
    console.log(previousSiblingElement)



    ///////////////////////////////  3-  Manipulation  DOM ///////////////////////


    // let childHeading = document.querySelector('.child')

    this.elementRef.nativeElement.innerHTML = 'Web Dev Is Awesome!'
    this.elementRef.nativeElement.style.color = 'blue'
    this.elementRef.nativeElement.style.fontSize = '30px'
    this.elementRef.nativeElement.style.fontFamily = 'Italic'

    this.elementRef.nativeElement.classList.add('title')   // adding class
    this.elementRef.nativeElement.classList.remove('title')  // removing class


    ///////////////TODO: Create Element (All HTML Tags) using DOM Manipulatiion ///////////////


    //append h1 tag in main div//

    const h1 = document.createElement('h1')
    h1.innerHTML = 'FrontEnd Is Awesome!!!!'
    h1.classList.add('box')
    const mainDiv = document.querySelector('.main')
    mainDiv?.appendChild(h1);

    // append p tag  in main div //

    const para = document.createElement('p')
    para.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut odio odit vitae?'
    const mainDiv2 = document.querySelector('.main')
    // mainDiv2?.appendChild(para)
    // mainDiv2?.insertAdjacentElement('beforebegin', para )  // append tag before begin element //
    mainDiv2?.insertAdjacentElement('afterend', para)        // append tag after end of element //




    ///////////////////////////////  4 - DOM Events ///////////////////////

    const button = document.querySelector('#btn')
    const headingH1 = document.querySelector('#heading')


    button?.addEventListener('click', (event) => {
      console.log('btn click', event.target)
      this.heading.nativeElement.style.color = 'purple'
      this.heading.nativeElement.style.fontSize = '25px'
      this.heading.nativeElement.style.textTransform = 'uppercase'
    })


    ///////////////////////////////  5 - Bulb On / Off ///////////////////////


    let img = document.querySelector('#img')
    let toggleBtn = document.querySelector('#toggle')

    toggleBtn?.addEventListener('click', (event: any) => {
      //   this.img.nativeElement.currentSrc = this.sun;
      //  console.log(img)
      this.show = !this.show

      //  if(this.show){
      //    toggleBtn?.innerHTML =  'turn On'
      //  }else{
      //   toggleBtn?.innerHTML =  'turn Off'
      //  }

    })


    ////////////////Main Button /////////////


    const element = document.querySelector('.mainButton')

    element?.addEventListener('click', (e: any) => {
      const outsideClick = !element.contains(e)
      console.log(outsideClick)
    })

  }

}
