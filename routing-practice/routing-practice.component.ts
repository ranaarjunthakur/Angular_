import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match-validator';
import { ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-routing-practice',
  templateUrl: './routing-practice.component.html',
  styleUrls: ['./routing-practice.component.scss']
})
export class RoutingPracticeComponent implements OnInit, CanComponentDeactivate {

  registerForm: FormGroup;
  submitted = false;
  changesSaved = false;
  isSaved = false;

  constructor(private activateroute: ActivatedRoute, private router: Router, private autservive: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }


  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      console.log(this.registerForm.value);
    }

    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activateroute })
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  onLogin() {
    this.autservive.login()
  }

  onLogout() {
    this.autservive.logout()
  }


  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    // if (!this.allowEdit) {
    //   return true
    // }
    // if((this.serverName !==this.server.name || this.serverStatus !== this.server.status)&& !this.changesSaved){
    // return confirm('Do you want to discard changes')
    // }else{
    //   return true
    // }

    if (!this.isSaved) {
      const result = confirm('There are unsaved changes! Are   you sure?');
      return  result;
    }
    return true ;
  }
  

}
