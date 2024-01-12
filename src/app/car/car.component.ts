import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-car-details',
  template: `
    <div *ngIf="car" class="card details-card">
      <div class="card-header">
        Détails de la voiture :
        <button class="close" aria-label="Close" (click)="hideDetails.emit()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="card-body">
        <p>ID: {{ car.id }}</p>
        <p>Marque: {{ car.marque }}</p>
        <p>Modèle: {{ car.modele }}</p>
        <p>Détails : {{ car.details }}</p>
      </div>
    </div>
  `,
  styles: [`
    .details-card {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      width: 300px;
    }

    .details-card .close {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.75rem 1.25rem;
      background-color: transparent;
      border: 0;
      cursor: pointer;
    }
  `]
})
export class CarComponent {
  @Input() car: any;
  @Output() hideDetails: EventEmitter<void> = new EventEmitter<void>();
}