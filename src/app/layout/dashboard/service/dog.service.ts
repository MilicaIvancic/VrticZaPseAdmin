import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DogDetails } from '../models/dog-details';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class DogService {
  

  constructor(
    private http: HttpClient,
  ) { }

  getDogs() {
  

    return this.http.get<Dog>(`http://localhost:5172/api/Dog`).pipe(
    );
  }
  getDogsSecundPage(x) {
  
    return this.http.get<Dog>(`http://localhost:5172/api/Dog?pageNumber=`+x).pipe(
    );
  }

  getDog(id: number) {
    return this.http.get<DogDetails>(`http://localhost:5172/api/Dog/${id}`).pipe(
    );
  }
}
