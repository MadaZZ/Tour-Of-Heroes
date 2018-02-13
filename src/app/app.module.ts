import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; // created Heroes component ->>This has click binding to select hero.
import { HeroDetailsComponent } from './hero-details/hero-details.component'; //creates HeroDetails component ->>This displays hero details.
import { HeroService } from './hero.service';// HeroService fetches heroes from mock heroes, Uses observables to fetch is data is asynchronous //-->> Also injected with message service.
import { MessageComponent } from './message/message.component'; // displays message below HeroDetails.
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module'// Service to inject message -->>Injects in HeroService.


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  HeroService,
  MessageService  
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
