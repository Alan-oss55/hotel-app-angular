import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private urlApi = "http://localhost:3000"

  private reservations : Reservation[]= [];

  constructor(
    private http: HttpClient
  ){}
  //CRUD

  getReservations() : Observable<Reservation[]>{  
    return this.http.get<Reservation[]>(this.urlApi + "/reservations");
   }

  getReservation(id: string) : Observable<Reservation>{ 
    return this.http.get<Reservation>(this.urlApi + "/reservations/" + id);

  }

  addReservation(reservation: Reservation): Observable<void>  { 
    return this.http.post<void>(this.urlApi +"/reservations", reservation)
  }

  deleteReservation(id: string) : Observable<void>{
    return this.http.delete<void>(this.urlApi + "/reservations/" + id);
  }

  updateReservation(id: string, updateReservation: Reservation): Observable<void>{
    return this.http.put<void>(this.urlApi + "/reservations/" + id, updateReservation)

  }

}
