import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {LogsComponent} from "./components/logs/logs.component";
import {FeathersService} from "./services/feathers.service";




@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FeathersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
