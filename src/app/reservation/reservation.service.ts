import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations : Reservation[]= [];

  constructor() { 
    let savedReservations = localStorage.getItem("reservations")
    this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  }

  //CRUD
  getReservations() : Reservation[]{  
    return this.reservations;
    localStorage.setItem("reservations", JSON.stringify(this.reservations))

   }

  getReservation(id: string) : Reservation | undefined{ 
    return this.reservations.find(res => res.id === id)
    localStorage.setItem("reservations", JSON.stringify(this.reservations))

  }

  addReservation(reservation: Reservation): void  { 
    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  deleteReservation(id: string) : void{
    let index = this.reservations.findIndex(res => res.id === id)
    this.reservations.splice(index, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations))

  }

  updateReservsation(updateReservsation: Reservation): void{
    let index = this.reservations.findIndex(res => res.id === updateReservsation.id);
    this.reservations[index] = updateReservsation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations))

  }

}
