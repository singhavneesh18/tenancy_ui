import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './panels/left-panel/left-panel.component';
import { HeaderComponent } from './panels/header/header.component';
import { FooterComponent } from './panels/footer/footer.component';
import { ContentComponent } from './panels/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
