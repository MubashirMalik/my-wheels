import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from 'src/app/services.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})

export class VehicleComponent implements OnInit {
  @Input('filterValue') filterValue: any;

  allVehicles: any;
  constructor(
    private service: ServicesService,
    private modalService: NgbModal,
  ) {}


  vehicleList : any;
  vehicleDetails: any;
  closeResult: any;

  ngOnInit(): void {
    this.vehicleList = this.service.vehicleList
  }

  counter(i: number) {
    return new Array(i);
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






