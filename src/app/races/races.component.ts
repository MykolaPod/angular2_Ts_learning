import { Component, OnInit } from '@angular/core';
import {RaceService} from '../services/race-service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races: any = [];
  constructor(private _raceService: RaceService) {  }

  ngOnInit() {
  }

  refreshRaces() {
    this.races = this._raceService.GetRaces();
  }
}
