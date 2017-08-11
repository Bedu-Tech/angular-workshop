import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MdButtonModule, MdToolbarModule, MdInputModule } from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
