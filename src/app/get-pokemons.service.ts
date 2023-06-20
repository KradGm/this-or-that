import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonsService {
  url = 'https://pokeapi.co/api/v2/pokemon/';
  randomId1: Number;
  randomId2: Number;
  constructor(private http: HttpClient) {this.randomId1 = 0; this.randomId2 = 0; }

  Pokemon1(){
    this.RandomId();
    return this.http.get<any>(this.url + this.randomId1);
  }
  Pokemon2(){
    this.RandomId();
    return this.http.get<any>(this.url + this.randomId2);
  }
  RandomId(){
    const pokemonCount = 1000;
    this.randomId1 = Math.floor(Math.random()* pokemonCount)
    this.randomId2 = Math.floor(Math.random()* pokemonCount)
  }
}
