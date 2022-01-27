import { Component, OnInit } from '@angular/core';
import {faBookOpen, faHome, faMap,faChartBar} from "@fortawesome/free-solid-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {
  title = 'catze';
  faHome = faHome;
  faBookOpen = faBookOpen;
  faMap = faMap;
  faDiscord = faDiscord;
  faChartBar = faChartBar;
  constructor() { }

  ngOnInit(): void {
  }

}
