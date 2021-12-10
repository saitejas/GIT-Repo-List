import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  avatarURL: any;
  @Input() userData: any;

  faMapMarker = faMapMarkerAlt;
  faLink = faLink;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    if (this.userData) {
      if (this.userData.hasOwnProperty('avatar_url') && this.userData['avatar_url'] && this.userData['avatar_url'] !== '') {
        this.avatarURL = this.userData['avatar_url'];
      } else {
        this.avatarURL = 'assets/img/user/profile.png';
      }
    }
  }

}
