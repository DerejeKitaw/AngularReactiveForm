import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {UserModule} from './user/user.module';
// import { VoltagedropComponent } from './voltagedrop/voltagedrop.component';

@NgModule({
  declarations: [
    AppComponent
    // ,
    // VoltagedropComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    UserModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
