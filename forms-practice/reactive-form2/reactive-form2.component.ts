import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.scss']
})
export class ReactiveForm2Component implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  genders=['Male','Female']
  forbiddenUsersNames =['Arjun','Rana']

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email' : new FormControl(null ,[Validators.required], this.forbiddenEmails),
      'gender' : new FormControl('Male'),
      'hobbies': new FormArray([])
    },
    );
    this.registerForm.statusChanges.subscribe((val)=>{
        console.log(val);
    })
    this.registerForm.valueChanges.subscribe((val)=>{
      console.log(val);
  })
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm)
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

  //TODO: add form Array  

  onAddHobbby(){
    let control  = new FormControl(null, Validators.required);
   (<FormArray>this.registerForm.get('hobbies')).push(control)
  }

  //TODO: Creating  custom Validator for  name

  forbiddenNames(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenUsersNames.indexOf(control.value)){
      return {'nameIsForbidden':true}
    }
    return null
  }

  //TODO: custom Asynchronus validator for  email

  forbiddenEmails(control:FormControl):Promise<any> | Observable<any>{
     const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
       if(control.value === 'arjun@gmail.com'){
          resolve({'emailIsForbidden':true})
       }else{
        resolve(null)
       }
      },1500)
     })
     return promise
  }

}
