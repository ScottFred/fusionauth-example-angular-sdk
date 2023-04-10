import { inject, NgModule } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AccountComponent } from './components/account/account.component';
import { FusionAuthService } from '@fusionauth/angular-sdk';

const loggedIn: CanActivateFn = (route) =>
  inject(FusionAuthService).isLoggedIn()
  ? true
  : createUrlTreeFromSnapshot(route, ['/', 'welcome']);

const loggedOut: CanActivateFn = (route) =>
  inject(FusionAuthService).isLoggedIn()
  ? createUrlTreeFromSnapshot(route, ['/', 'account'])
  : true;

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent, canActivate: [loggedOut]},
  {path: 'account', component: AccountComponent, canActivate: [loggedIn]},
  {path: '', redirectTo: '/account', pathMatch: 'full'},
  {path: '**', redirectTo: '/account'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
