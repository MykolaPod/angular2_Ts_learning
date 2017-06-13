import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class RaceService {

  constructor(private _http: Http) { }

  GetRaces() {
    return this._http.get('http://localhost:9000/races')
      .map(res => res.json());
  }
}
