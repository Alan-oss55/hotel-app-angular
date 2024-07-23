import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit{

  reservations: Reservation[] = [];

  constructor(
    private service: ReservationService
  ){}

  ngOnInit(): void {
    this.service.getReservations().subscribe(res =>{
      this.reservations = res;
    });
  }

  deleteReservation(id: string){
    this.service.deleteReservation(id).subscribe(res =>{
      console.log("deleted request success");
    });
  }
  

}
