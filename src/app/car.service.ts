import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars = [
    { id: 0, marque: 'Ford', modele: 'Mustang', details: this.getRandomColor() },
    { id: 1, marque: 'Chevrolet', modele: 'Camaro', details: this.getRandomColor()},
    { id: 2, marque: 'BMW', modele: 'M3', couleur: this.getRandomColor()},
    { id: 3, marque: 'Mercedes-Benz', modele: 'C-Class', details: this.getRandomColor()},
    { id: 4, marque: 'Audi', modele: 'A4', details: this.getRandomColor()},
  ];

  constructor() { }

  getCars() {
    return this.cars;
  }

  private getRandomColor(): string {
    const colors = ['Rouge', 'Bleu', 'Vert', 'Argent', 'Noir'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
