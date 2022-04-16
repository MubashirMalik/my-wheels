import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output('nameSearch') nameSearch = new EventEmitter();
  @Output('vehicleType') vehicleType = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search(content: any, type: string) {
    this.nameSearch.emit({value: content.target.value, type})
  }

  changeVehicle(type: any) {
    this.vehicleType.emit(type.target.value)
  }

}
