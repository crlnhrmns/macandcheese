import { Component, OnInit } from '@angular/core';
import { Event } from './event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  todays_date = new Date();
  events = [
    new Event("assets/img/events/default.jpg", new Date('2018-02-09'), "Mac & Cheese in de living", "Hoe de winnaar van onze recensiewedstrijd beter belonen dan met een passage van Tyler in haar eigen woonkamer? Ook vandaag brengen we extra kaas mee om de font extra cheesy te maken.", ""),
    new Event("assets/img/events/ntt_tryout_1.jpg", new Date('2018-02-25'), "Improcessie vs Mac & Cheese", "Als voorbereiding op onze nakende internationale reis, zijn wij te gast bij het  alom fantastische Improcessie. Dat er vuur aan ieders schenen gelegd zal worden, staat vast! Kom af voor een volle avond offline vertier!", "https://www.facebook.com/events/1333685523393530/"),
    new Event("assets/img/events/ntt.jpg", new Date('2018-03-09'), "NTT 2018", "Onze eerste internationale escapade: het Nederlands Theatersport Toernooi in Utrecht! Kom supporteren en ontdek meteen ook al het schoons dat onze noorderburen te bieden hebben!", "https://www.facebook.com/events/124811878138439/"),
    new Event("assets/img/events/kemphanen3.jpg",new Date('2017-11-27'), "Kemphanen - Halve Finale", "Vrouwen in de menopauze dwingen Tyler uit z’n kinderschoenen. In de volgende ronde, van wel 40 min., nemen we het op tegen Commotie!", "https://www.facebook.com/Kemphanen-1881227192118921/"),
    new Event("assets/img/events/kemphanen2.jpg",new Date('2017-11-20'), "Kemphanen - Kwartfinale", "Na onze overwinning in de voorrondes, mag Tyler zijn diepste zieleroerselen opnieuw gaan tonen. Deze keer nemen we het op tegen niemand minder dan Compagnie Amai themselves! En of het spannend wordt! We zien jullie daar!", "https://www.facebook.com/events/118823172064049/"),
    new Event("assets/img/events/kemphanen1.jpg",new Date('2017-08-13'), "Kemphanen - 1ste ronde", "De eerste keer dat Tyler op een publiek wordt losgelaten. Dat wij er klaar voor zijn is een understatement. We nemen ook wat extra kaas mee om de hele avond nog meer op smaak te brengen.", "https://www.facebook.com/events/473119183035251/"),
    new Event("assets/img/events/tryout2.jpg",new Date('2017-08-01'), "Try Out 2", "Voor we ons open en bloot geven in de wijde wereld, willen we graag beroep doen op jullie expertise en kritische blik. Wij nodigen jullie uit op onze try-out!", "https://www.facebook.com/events/229224844256646/")

  ]
  constructor() { }
  ngOnInit() {
  }

  dateHasPassed(event_date){
    return this.todays_date.setHours(0, 0, 0, 0) > event_date.setHours(0, 0, 0, 0);
  }
}
