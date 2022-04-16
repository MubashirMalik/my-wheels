import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mywheels';
  vehicleType = 'cars'

  filterValue: any = null;
  nameSearch(value: any) {
    this.filterValue = value
  }

  vehicleTypeChange(type: string) {
    this.vehicleType = type
  }
}
