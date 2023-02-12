import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-practice',
  templateUrl: './forms-practice.component.html',
  styleUrls: ['./forms-practice.component.scss']
})
export class FormsPracticeComponent implements OnInit {

  @ViewChild('val') signupForm:NgForm
  defaultQuestion= 'teacher'
  answer=''
  genders =['Male','Female']
  submitted=false;

  constructor() { }

  ngOnInit(): void {
  }

  user = {
    username: '',
    email:'',
    secretQuestions:'',
    answer:'',
    gender:''
  }

  suggestUserName(){
    const suggestdName = 'Superuser'
    // this.signupForm.setValue({
    //   userData:{
    //       username: suggestdName,
    //       email: ''
    //   },
    //   secret:'pet',
    //   QuestionAnswer: '',
    //   gender:'Male'
    // })
    this.signupForm.form.patchValue({
      userData:{
          username: suggestdName,
      }
    })
  }

  // onSubmit(form:NgForm){
  // console.log(form)
  // console.log(form.value)
  // }

  onSubmit(){
    console.log(this.signupForm)
    console.log(this.signupForm.value)
    this.submitted=true;
    this.user.username = this.signupForm.value.userData.username
    this.user.email = this.signupForm.value.userData.email
    this.user.secretQuestions = this.signupForm.value.secret
    this.user.answer = this.signupForm.value.QuestionAnswer
    this.user.gender = this.signupForm.value.gender
    }
  

}
