import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";
import { FusionAuthService, UserInfo } from '@fusionauth/angular-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-demo';

  //@ts-ignore
  user: Subject<UserInfo> = new BehaviorSubject<UserInfo>(null);

  constructor(
    private fusionAuth: FusionAuthService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.fusionAuth.initAutoRefresh();
  }
}
