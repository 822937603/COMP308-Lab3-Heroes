import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import two way data binding for form inputs
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
//import hero details component
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';

import { AppRoutingModule }     from './app-routing.module';

import { HttpModule } from '@angular/http';

import { HeroSearchComponent } from './hero-search.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent, HeroDetailComponent, DashboardComponent, HeroesComponent, HeroSearchComponent ], //declare HeroDetailComponent
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
