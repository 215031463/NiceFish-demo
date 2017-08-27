import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import { SitestatComponent } from '../sitestat/sitestat.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    OnlineContactComponent,
    SocialChannelComponent,
    SitestatComponent
  ],
  providers: [ ],
  exports: []
})
export class HomeModule { }
