import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { User } from './user';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    userForm:FormGroup;
    user: User= new User();

    constructor(private fb: FormBuilder){}
  ngOnInit() {
    this.userForm = this.fb.group({
       firstName: ['', [Validators.required]],
       lastName: ['', [Validators.required]],
            
    });
  }
//TODO implement save method
}
