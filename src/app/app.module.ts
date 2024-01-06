import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilialComponent } from './components/filial/filial.component';
import { InstagramWidgetComponent } from './components/instagram-widget/instagram-widget.component';
import { TwitterWidgetComponent } from './components/twitter-widget/twitter-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilialComponent,
    InstagramWidgetComponent,
    TwitterWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
