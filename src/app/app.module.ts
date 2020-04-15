


import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './cts/public/publicrouting/public.module';
import { HomeModule } from './cts/home/homerouting/home.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LayoutComponent } from './cts/home/components/layout/layout.component';

@NgModule({
  declarations:[
    AppComponent,
    PagenotfoundComponent,
    // LayoutComponent
  ],
  imports:[
    CommonModule,
    BrowserAnimationsModule,
    PublicModule,
    HomeModule,
    AppRoutingModule
  ],
  providers:[

  ],
  bootstrap:[AppComponent]
})

export class AppModule { }
