import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent {

  @Input() viewMode = false;

  @Input() vehicle: Vehicle = {
    placa: '',
    chassi: '',
    renavam: '',
    marca: '',
    modelo: '',
    ano: '',
  };
  
  message = '';

  constructor(
    private service: VehicleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getVehicle(this.route.snapshot.params["id"]);
    }
  }

  getVehicle(id: string): void {
    this.service.get(id)
      .subscribe({
        next: (data) => {
          this.vehicle = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  update(): void {
    this.message = '';

    this.service.update(this.vehicle.id, this.vehicle)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'As informações deste carro foram atualizadas!';
        },
        error: (e) => console.error(e)
      });
  }

  delete(): void {
    this.service.delete(this.vehicle.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/vehicles']);
        },
        error: (e) => console.error(e)
      });
  }

}
