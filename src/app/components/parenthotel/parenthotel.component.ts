import { Component, OnInit, ViewChild,  AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { ChildHotelComponent } from '../child-hotel/child-hotel.component';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-parenthotel',
  templateUrl: './parenthotel.component.html',
  styleUrls: ['./parenthotel.component.scss']
})
export class ParenthotelComponent implements OnInit,AfterViewInit {

  msg = ''
  CompanyName = 'Ioanyt Innovations';

  @ViewChild(ChildHotelComponent) viewData !: ChildHotelComponent
  @ViewChild(ChildHotelComponent)  child ! : ChildHotelComponent
  @ViewChild(ChildHotelComponent, {static: false})  hello ! : ChildHotelComponent

  title= 'parent component'
  inputEmail = '';
  inputPassword = ''
  inputObj = {
    "email": '',
    "password": ''
  }
  response:any

  hotels = [
    { name: 'Taj Palace', location: 'Delhi'},
    { name: 'Leela Place', location: 'New York'},
    { name: 'Park Hyatt ', location: 'Sydney'}
    ];

    name:any;
    message:any
    sendToChild:any
    data=''

    // numbers=[1,2,3,4,5,6,7]
    oddNumbers=[1,3,5,7]
    evenNumbers=[2,4,6,8]
    onlyOdd=false;

  constructor(private master:MasterService,  private cd:ChangeDetectorRef) { 

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.msg =  this.child.childData
    this.cd.detectChanges()
    console.log( this.child.childData);  //  get data from child  component using @ViewChild decorator
    console.log('Hello ', this.hello.Compname); 
  }

  transferData(email: any, password: any) {
    this.inputEmail = email
    this.inputPassword = password
    this.inputObj = {
      "email": email,
      "password": password
    } 

    // this.master.SaveData(this.inputObj)   // pass data and functions through service 

  this.response =  this.viewData.updateList(this.inputObj)   //pass updateList() function from child component using @viewchild 

  }

  updateTitle(title:any){
  this.title = title
  }

  UpdateHotels(hotel:any,location:any){
    this.hotels.push({'name':hotel, 'location':location})
  }

  getResponse(event:any){
   this.message= event
  }

  submit(){
    this.sendToChild = this.name
  }

 updateData(item:any){
   console.warn(item)
   this.data = item;
 }

}
