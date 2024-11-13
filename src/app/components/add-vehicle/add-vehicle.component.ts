import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  constructor(private service: VehicleService,     
    private router: Router, private formBuilder: FormBuilder, ) { }
    
  vehicle: Vehicle = {
    chassi: '',
    placa: '',
    renavam: '',
    marca: '',
    modelo: '',
    ano: ''
  };
  submitted = false;

  ngOnInit(): void {
  }

  create(): void {

    const data = {
      placa: this.vehicle.placa,
      chassi: this.vehicle.chassi,
      renavam: this.vehicle.renavam,
      marca: this.vehicle.marca,
      modelo: this.vehicle.modelo,
      ano: this.vehicle.ano
    };

    this.service.create(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
          this.router.navigate(['/vehicles']);
        },
        error: (e) => console.error(e)
      });
  }

  newVehicle(): void {
    this.submitted = false;
    this.vehicle = {
      chassi: '',
      placa: '',
      renavam: '',
      marca: '',
      modelo: '',
      ano: ''
    };
  }

}
