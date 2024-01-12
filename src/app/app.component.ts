import { Component } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars: any[] = [];
  showDetailsCard: boolean = false;
  selectedCar: any;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

  showDetails(car: any) {
    this.selectedCar = car;
    this.showDetailsCard = true;
  }

  hideDetailsCard() {
    this.showDetailsCard = false;
  }
}
