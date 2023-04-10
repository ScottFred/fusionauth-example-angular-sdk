import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FusionAuthService, UserInfo } from '@fusionauth/angular-sdk';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user: Subject<UserInfo | any> = new BehaviorSubject(null);
  constructor(
    private fusionAuth: FusionAuthService
  ) {}

  async ngOnInit(): Promise<void> {
    const user = await this.fusionAuth.getUserInfo();
    this.user.next(user);
  }
}
