import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ServicesService } from 'src/app/services.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})

export class VehicleComponent implements OnInit {
  constructor(
    private service: ServicesService,
    private modalService: NgbModal,
  ) {}

  vehicleList : any; // All vehicles
  vehicleDetails: any; // Details of a vehicle
  closeResult: any;

  ngOnInit(): void {
    this.vehicleList = this.service.vehicleList
  }

  counter(i: number) {
    return new Array(i);
  }

  // Task 2
  filterVehicles(event: any, filterBy: string) {

    this.vehicleList = this.service.vehicleList

    var filterVehicles: any = [];
    if (filterBy === "city") {
      for (var vehicle of this.vehicleList) {
        if (vehicle.location === event.target.value) {
          filterVehicles.push(vehicle)
        }
      }
    }
    if (filterBy === "make") {
      for (var vehicle of this.vehicleList) {
        if (vehicle.make === event.target.value) {
          filterVehicles.push(vehicle)
        }
      }
    }
    if (filterBy === "ratings") {
      for (var vehicle of this.vehicleList) {
        if (vehicle.ratings == event.target.value) {
          filterVehicles.push(vehicle)
        }
      }
    }
    if (filterBy === "color") {
      for (var vehicle of this.vehicleList) {
        if (vehicle.color === event.target.value) {
          filterVehicles.push(vehicle)
        }
      }
    }
    if (filterBy === "engine") {
      for (var vehicle of this.vehicleList) {
        if (vehicle.engineCapacity == event.target.value) {
          filterVehicles.push(vehicle)
        }
      }
    }
    if (filterBy === "type") {
      for (var vehicle of this.vehicleList) {
        if (vehicle.type === event.target.value) {
          filterVehicles.push(vehicle)
        }
      }
    }
    if (filterBy === "price") {
      for (var vehicle of this.vehicleList) {
        if (vehicle.price <= 500000 && event.target.value == 1) {
          filterVehicles.push(vehicle)
        }
        if (vehicle.price > 500000 && vehicle.price <= 1000000 && event.target.value == 2) {
          filterVehicles.push(vehicle)
        }
        if (vehicle.price > 1000000 && vehicle.price <= 2000000 && event.target.value == 3) {
          filterVehicles.push(vehicle)
        }
        if (vehicle.price > 2000000 && vehicle.price <= 5000000 && event.target.value == 4) {
          filterVehicles.push(vehicle)
        }
        if (vehicle.price > 5000000 && event.target.value == 5) {
          filterVehicles.push(vehicle)
        }
      }
    }

    this.vehicleList = filterVehicles;
  }

  // Task 3
  open(content: any, vehicle: any) {
    this.vehicleDetails = vehicle;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg'})
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {}
      );
  }
}