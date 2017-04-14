import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import { User } from './user';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    voltageDropCalForm:FormGroup;
    user: User= new User();
    formValues;

    constructor(private fb: FormBuilder){}
  ngOnInit() {
    this.voltageDropCalForm = this.fb.group({
       distance: ['', [Validators.required]],
       voltage: ['', [Validators.required]],
       current: ['', [Validators.required]],
            
    });
  }
//TODO implement save method
save(): void {
  console.log('Saved: '+ JSON.stringify(this.voltageDropCalForm.value));
  this.formValues = JSON.stringify(this.voltageDropCalForm.value);
}
populateTestData(): void {
  this.voltageDropCalForm.patchValue({
            distance: '300',
            voltage: '240',
            current:'20'
           });
}
clearTestData(): void {
  console.log('Data cleared');
}
}
