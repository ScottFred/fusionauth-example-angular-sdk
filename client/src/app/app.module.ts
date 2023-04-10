import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AccountComponent } from './components/account/account.component';
import { FooterComponent } from './components/footer/footer.component';
import { FusionAuthModule } from '@fusionauth/angular-sdk';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AccountComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FusionAuthModule.forRoot({
      clientId: 'e9fdb985-9173-4e01-9d73-ac2d60d1dc8e',
      serverUrl: 'http://localhost:9000',
      redirectUri: 'http://localhost:3000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
