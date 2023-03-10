import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  
  city= 'Noida'
  post;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.userForm = new FormGroup({
    //   'name' : new FormControl('',[Validators.required]),
    //   'email':new FormControl(null,[Validators.required,Validators.email]),
    //   'city': new FormControl(this.city,[Validators.required]),
    //   'citizen' : new FormControl('indian')
    // });


    this.userForm = this.formBuilder.group({
        'name' : ['',[Validators.minLength(10),Validators.required]],
        'email': ['', {validators: [Validators.required,Validators.email],
          updateOn: 'blur'}],
        'city': [this.city,[Validators.required]],
        'citizen' : ['indian',[Validators.required]],
        'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    })
  }


  onSubmit(post) {
    this.post = post;
    console.warn(this.userForm.value);
    console.log(this.userForm.controls.name.value);
  }

  // changecitizen(){
  //   this.citizen.setValue('canada')
  // }

  updateAllform(){
    this.userForm.patchValue({
      name : "Arjun",
      email : "arjun@gmail.com",
      city :  "Budhana",
      citizen : "Barmuda"
    })
  }

  updateAllVal(){
    this.userForm.reset()
    this.userForm.setValue({
      name : "Akash",
      email : "akash@gmail.com",
      city :  "Budhana",
      citizen : "Bangladesh"
    })
  }
}
