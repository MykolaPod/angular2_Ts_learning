import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PonyComponent } from './pony/pony.component';
import { RacesComponent } from './races/races.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RaceService } from './services/race-service';

@NgModule({
  declarations: [
    AppComponent,
    PonyComponent,
    RacesComponent,
    PoniesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
