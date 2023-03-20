import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-child-hotel',
  templateUrl: './child-hotel.component.html',
  styleUrls: ['./child-hotel.component.scss']
})
export class ChildHotelComponent implements OnInit {

  @Input() emailData: any;
  @Input() passwordData: any;
  @Input() objData: any;
  @Output() dataupdateevent = new EventEmitter<string>()
  @Input() item: any;
  @Input() Name: any
  @Output() getResponse = new EventEmitter;
  @Output() updateChildData = new EventEmitter<string>()

  childData: string = 'let data from child component to  parent component using @ViewChild';
  @Input() Compname: any;


  listArray = [
    { 'email': "", "password": '' }
  ]

  constructor(private master: MasterService) {
    // this.listArray = this.master.GetData();
  }

  ngOnInit(): void {
    console.log(this.item)
  }

  updateList(obj: any) {
    this.listArray.push(obj);
    return obj.email + " " + "is Added"
  }

  onClick() {
    this.getResponse.emit('Message from child');
  }

}
