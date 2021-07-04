import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VaccinationAnalyticsService {

  constructor(private _http: HttpClient) { }

  getStateWiseData()
  {
    return this._http.get("https://api.covid19india.org/v4/min/data.min.json");
  }
}
