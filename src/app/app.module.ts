import { NgModule } from '@angular/core';
// we also need angular router for Nebular to function properly
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,

    RouterModule.forRoot([]),

    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
