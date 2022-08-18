import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './panels/left-panel/left-panel.component';
import { HeaderComponent } from './panels/header/header.component';
import { ContentComponent } from './panels/content/content.component';
import { TenantDashboardComponent } from './panels/content/tenant/tenant-dashboard/tenant-dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    HeaderComponent,
    ContentComponent,
    TenantDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, ReactiveFormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
