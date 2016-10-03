import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { routing }  from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
