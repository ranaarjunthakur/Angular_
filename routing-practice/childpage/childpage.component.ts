import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';


interface Products {
  id:any;
  name:string;
  description:string;
}

@Component({
  selector: 'app-childpage',
  templateUrl: './childpage.component.html',
  styleUrls: ['./childpage.component.scss']
})
export class ChildpageComponent implements OnInit {

  Data: Products = <Products> {};
  userID: any;
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // TODO: GET DATA FROM SNAPSHOT  //
   
    this.Data = {
       id: this.route.snapshot.params['id'],
       name:this.route.snapshot.params['name'],
       description: this.route.snapshot.params['description']
    }
    console.log(this.Data)


    // TODO: GET DATA FROM OBSERVABLE  //

    // this.paramSubscription = this.route.paramMap.subscribe((params:Params)=>{

    //    this.Data.id = params['id'];
    //    this.Data.name = params['name'];
    //    this.Data.description = params['description'];
    //    console.log(params)
    // })

    // TODO: OR 

    this.route.paramMap.subscribe((params)=>{
       console.log(params)
       this.userID = this.route.snapshot.paramMap.get("id");
      console.log(this.userID)
    })
  
  }


  // ngOnDestroy(){
  //   this.paramSubscription.unsubscribe()
  // }

}
