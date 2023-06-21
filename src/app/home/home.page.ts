import { Component, OnInit } from '@angular/core';
import { GetPokemonsService } from '../get-pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  pokemonSprite1!: string;
  pokemonSprite2!: string;
  voteCount!: number;
  voted = false;
  constructor(private getPokemon: GetPokemonsService) { }
  ngOnInit() {this.Pokemon1();this.Pokemon2()}
  Recall(){
    this.getPokemon.Pokemon1().subscribe(data => {
      console.log(data);
    });
  }
  Pokemon1() {
    this.getPokemon.Pokemon1().subscribe(data => {
        this.pokemonSprite1 = data.sprites.front_default;
      },
      error => {
        this.Recall();
        console.error(error);
      });

    }
  Pokemon2(){
    this.getPokemon.Pokemon2().subscribe(data => {
      this.pokemonSprite2 = data.sprites.front_default;
    },
     error => {
      this.Recall();
      console.error(error);
    });
}
  CallVote(){
    if(this.voted != true){
      this.voteCount++;
      this.voted = true;
    }
  }
}
