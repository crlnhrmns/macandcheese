import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './sections/about/about.component';
import { TeamComponent } from './sections/team/team.component';
import { EventsComponent } from './sections/events/events.component';
import { ContactComponent } from './sections/contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarVerticalComponent } from './shared/navbar-vertical/navbar-vertical.component';
import { ServicesComponent } from './sections/services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TeamComponent,
    EventsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    NavbarVerticalComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
