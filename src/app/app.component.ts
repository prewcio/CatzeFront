import { Component } from '@angular/core';
import {faBookOpen, faHome, faMap,faChartBar} from "@fortawesome/free-solid-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catze';
  faHome = faHome;
  faBookOpen = faBookOpen;
  faMap = faMap;
  faDiscord = faDiscord;
  faChartBar = faChartBar;
}
