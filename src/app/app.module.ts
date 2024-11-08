import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehiclesListComponent },
  { path: 'vehicles/create', component: AddVehicleComponent },
  { path: 'vehicles/:id', component: VehicleDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddVehicleComponent,
    VehiclesListComponent,
    VehicleDetailComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
