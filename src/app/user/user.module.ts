import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserObjArrayPipe } from './user-obj-array.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[UserComponent],
  declarations: [UserComponent, UserObjArrayPipe]
})
export class UserModule { }
