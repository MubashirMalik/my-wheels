import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Vehicle } from './model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private _getUrl = "http://localhost:3000/api/vehicles";
  private _postUrl = "http://localhost:3000/api/vehicle";

  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
  }

  constructor(private _http: HttpClient) { }

  getVehicles() {
    return this._http.get(this._getUrl).pipe(map((response) => response))
  }

  addVehicle(vehicle: Vehicle) {
    return this._http.post(this._postUrl, JSON.stringify(vehicle), this.httpOptions);
  }

  deleteVehicle(id: String) {
    return this._http.delete(`${this._postUrl}/${id}`, this.httpOptions);
  }
}
