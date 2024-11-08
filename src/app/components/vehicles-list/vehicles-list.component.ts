import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  vehicles?: Vehicle[];
  vehicle: Vehicle = {};
  currentIndex = -1;
  title = '';

  constructor(private service: VehicleService) { }

  ngOnInit(): void {
    this.findVehicles();
  }

  findVehicles(): void {
    this.service.getAll()
      .subscribe({
        next: (data) => {
          this.vehicles = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.findVehicles();
    this.vehicle = {};
    this.currentIndex = -1;
  }

  setVehicle(vehicle: Vehicle, index: number): void {
    this.vehicle = vehicle;
    this.currentIndex = index;
  }

  removeAllVehicles(): void {
    this.service.deleteAll()
      .subscribe({
        next: (res) => {
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}
