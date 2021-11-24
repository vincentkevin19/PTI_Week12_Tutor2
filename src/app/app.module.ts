import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; //import modul reactive form
import { DataComponent } from './data/data.component';
import { CommonModule } from '@angular/common'; //taruh juga common module agar angular directive
											   //bisa dibaca oleh tag normal html seperti div, dll										

@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, //taruh reactive form yg mau diimport
    CommonModule //taruh commonmodule yang mau diimport
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
