import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import two way data binding for form inputs
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
//import hero details component
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent ], //declare HeroDetailComponent
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
