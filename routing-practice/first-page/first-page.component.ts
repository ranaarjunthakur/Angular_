import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  constructor(private rout:Router) { }

  ngOnInit(): void {
  }

  Products = [
    {
      id: "ABC8441189035",
      name: "Tshirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: "DEF6510463347",
      name: "Shoes",
      description: "Proin ac metus in diam porttitor viverra eu sit amet ligula."
    },
    {
      id: "GHI0831819467",
      name: "Handbags",
      description: "Duis sodales dui vitae urna varius, at ullamcorper purus tempor."
    }
  ]



  navToPage(pageNumber:number){
    this.rout.navigate(['secondPage','3','edit'], {queryParams:{id:3},fragment:'loading'},) 
  }


}
