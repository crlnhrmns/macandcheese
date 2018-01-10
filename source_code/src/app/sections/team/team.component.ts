import { Component, OnInit } from '@angular/core';
import { TeamMember } from './team-member';
import { TeamImage} from './team-image';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team_members = [
    new TeamMember("Magali Minet", "Mac", "Perruche en rupsen. Vol stijl en enthousiasme. Massa’s energie en zalige zachtheid.", "assets/img/team/magali.jpg","https://www.facebook.com/magali.minet","",""),
    new TeamMember("Caroline Hermans", "Cheese", "Flapkes en kuiltjes. Geraffineerd en vol onverwachte wendingen. Duister en verlicht tegelijk.", "assets/img/team/caroline.jpg","https://www.facebook.com/crlnhrmns","https://www.instagram.com/crlnhrmns/","https://twitter.com/crlnhrmns")
  ];

  team_images = [
    new TeamImage("assets/img/team/e1.jpg", "Kemphanen - kwartfinale"),
    new TeamImage("assets/img/team/e2.jpg", "Kemphanen - halve finale"),
    new TeamImage("assets/img/team/e3.jpg", "Fotoshoot"),
    new TeamImage("assets/img/team/e4.JPG", "Fotoshoot"),
    new TeamImage("assets/img/team/e5.jpg", "Kemphanen - halve finale"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
