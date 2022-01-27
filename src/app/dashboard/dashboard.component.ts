import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {StatsApiService} from "../services/stats-api.service";
import {MatDialog, MatDialogContent} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private route: ActivatedRoute,
    private sApi: StatsApiService,
  ) { }

  public ipAddress: string = "";
  public nickname: string = "";
  public ipInfo:object = new Object("");
  public info: object = new Object("");


  ipAddressGet():any{
    this.sApi.getIPAddress().toPromise().then(data=> {
      if(data){
        this.ipInfo = data;
        let keys = Object.entries(this.ipInfo);
        this.ipAddress = keys[0][1];
        this.getStatsData(this.nickname,this.ipAddress);
      }
    })
  }

  getStatsData(nickname: string,ip:string):any{
      if(nickname){
        this.sApi.getInvites(nickname.toString(),ip.toString()).toPromise().then(data => {
          if(data){
            this.info = data;
          }
        })
      }
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get("nickname")!=null) {
      let nickname = this.route.snapshot.paramMap.get("nickname");
      if(nickname){
        this.nickname=nickname;
      }
      this.ipAddressGet();
    }
  }
}
