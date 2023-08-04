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
  formStatus;
  
  constructor(private formBuilder: FormBuilder) {
     this.userForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(5), Validators.pattern('^[a-zA-Z]+$')]),
    lastName: new FormControl('',[Validators.required,Validators.maxLength(15)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    address: new FormGroup({
       address1: new FormControl('',Validators.required)
    }),
    companies: new FormArray([
        new FormControl('Vserve World'),
        new FormControl('IOanyT Innovations'),
        new FormControl('WebTech Solutions')
    ])
  })

 this.userForm.statusChanges.subscribe((status)=>{
   console.log(status)
   this.formStatus=  status
 })
  }

  ngOnInit() {
    // this.userForm = new FormGroup({
    //   'name' : new FormControl('',[Validators.required]),
    //   'email':new FormControl(null,[Validators.required,Validators.email]),
    //   'city': new FormControl(this.city,[Validators.required]),
    //   'citizen' : new FormControl('indian')
    // });


    this.userForm = this.formBuilder.group({
        'name' : ['',[Validators.minLength(10),Validators.required]],
        'email': ['', {validators: [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
          updateOn: 'blur'}],
        'city': [this.city,[Validators.required]],
        'citizen' : ['indian',[Validators.required]],
        'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]]]
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
