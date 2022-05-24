import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: [VehicleService]
})

export class VehicleComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private _vehicleService: VehicleService,
    private router: Router
  ) {}

  updateForm: any;
  vehicleForm = new FormGroup({
    imageUrl: new FormControl("", Validators.required),
    title: new FormControl("", Validators.required),
    type: new FormControl("", Validators.required),
    location: new FormControl("", Validators.required),
    sellerName: new FormControl("", Validators.required),
    sellerEmail: new FormControl("", Validators.required),
    sellerContactNumber: new FormControl("", Validators.required),
    sellerComments: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    model: new FormControl("", Validators.required),
    make: new FormControl("", Validators.required),
    color: new FormControl("", Validators.required),
    dateAdded: new FormControl("", Validators.required),
    transmission: new FormControl("", Validators.required),
    registerdIn: new FormControl("", Validators.required),
    engineCapacity: new FormControl("", Validators.required),
    kmsUsed: new FormControl("", Validators.required),
    ratings: new FormControl("", Validators.required),
  });

  vehicleList : any; // All vehicles
  vehicleDetails: any; // Details of a vehicle
  closeResult: any;
  copyVehicleList: any;

  ngOnInit(): void {
    this._vehicleService.getVehicles().subscribe(resVehicleData => this.vehicleList = this.copyVehicleList = resVehicleData);
  }

  counter(i: number) {
    return new Array(i);
  }

  newVehicle() {
    if(this.vehicleForm.valid) {
      this._vehicleService.addVehicle(this.vehicleForm.value).subscribe(res => {
        this.vehicleForm.reset();
        this.vehicleList.push(res);
      });
    } else {
      console.log("Form is invalid..");
    }
  }

  removeVehicle(id: String) {
    this._vehicleService.deleteVehicle(id).subscribe(res => {
      console.log(res);
      this.vehicleList = this.vehicleList.filter(function(vehicle: any) { return vehicle._id !== id; });
    });

    this.copyVehicleList = this.vehicleList;
  }

  updateVehicle() {
    if(this.updateForm.valid) {
      this._vehicleService.editVehicle(this.updateForm.value, this.vehicleDetails._id).subscribe(res => {
        this.vehicleList = this.vehicleList.filter((vehicle: any) => { return vehicle._id !== this.vehicleDetails._id; });
        this.vehicleList.push(res);
        this.copyVehicleList = this.vehicleList;
        this.updateForm.reset();
      });
    } else {
      console.log("Form is invalid..");
    }
  }

  // Task 2
  filterVehicles(event: any, filterBy: string) {

    this.vehicleList = this.copyVehicleList;

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

  filterVehiclesMultiple() {
    this.vehicleList = this.copyVehicleList;

    var filterVehicles: any = [];
    var citySelect: any;
    var makeSelect: any;
    var ratingsSelect: any;
    var colorSelect: any;
    var engineSelect: any;
    var typeSelect: any;

    citySelect = document.getElementById("city");
    makeSelect = document.getElementById("make");
    ratingsSelect = document.getElementById("ratings");
    colorSelect = document.getElementById("color");
    engineSelect = document.getElementById("engine");
    typeSelect = document.getElementById("type");

    for (var vehicle of this.vehicleList) {
      if ((vehicle.location === citySelect.value || citySelect.value === "") && (vehicle.make === makeSelect.value || makeSelect.value === "") && (vehicle.ratings == ratingsSelect.value || ratingsSelect.value === "") && (vehicle.color === colorSelect.value || colorSelect.value === "") && (vehicle.engineCapacity == engineSelect.value || engineSelect.value === "") && (vehicle.type === typeSelect.value || typeSelect.value === "")) {
        filterVehicles.push(vehicle)
      }
    }
    this.vehicleList = filterVehicles;
  }

  // Task 3
  popUpDisplayVehicleDetails(content: any, vehicle: any) {
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

  popUpAddVehicle(content: any) {
    this.modalService
    .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg'})
    .result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {}
    );
  }

  popUpUpdateVehicle(content: any, vehicle: any) {
    this.vehicleDetails = vehicle;
    this.updateForm = new FormGroup({
      imageUrl: new FormControl(vehicle.imageUrl, Validators.required),
      title: new FormControl(vehicle.title, Validators.required),
      type: new FormControl(vehicle.type, Validators.required),
      location: new FormControl(vehicle.location, Validators.required),
      sellerName: new FormControl(vehicle.sellerName, Validators.required),
      sellerEmail: new FormControl(vehicle.sellerEmail, Validators.required),
      sellerContactNumber: new FormControl(vehicle.sellerContactNumber, Validators.required),
      sellerComments: new FormControl(vehicle.sellerComments, Validators.required),
      price: new FormControl(vehicle.price, Validators.required),
      model: new FormControl(vehicle.model, Validators.required),
      make: new FormControl(vehicle.make, Validators.required),
      color: new FormControl(vehicle.color, Validators.required),
      dateAdded: new FormControl(vehicle.dateAdded, Validators.required),
      transmission: new FormControl(vehicle.transmission, Validators.required),
      registerdIn: new FormControl(vehicle.registerdIn, Validators.required),
      engineCapacity: new FormControl(vehicle.engineCapacity, Validators.required),
      kmsUsed: new FormControl(vehicle.kmsUsed, Validators.required),
      ratings: new FormControl(vehicle.ratings, Validators.required),
    });

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
