import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {


  isSaved = false;
  allowEdit = false

  constructor( private activateroute: ActivatedRoute, private router: Router, private autservive: AuthService) { }

  ngOnInit(): void {

    // TODO: BY SNAPSHOT

    console.log(this.activateroute.snapshot.queryParams)
    console.log(this.activateroute.snapshot.fragment)

    // TODO: BY OBSERVABLE

    console.log(this.activateroute.queryParams.subscribe((queryParams) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    }))

    console.log(this.activateroute.fragment.subscribe((res) => {
      console.log(res)
    }))

  }


}
