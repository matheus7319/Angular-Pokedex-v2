import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { PokemonCardComponent } from 'src/app/components/pokemon-card/pokemon-card.component';


@NgModule({
  declarations: [
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    PokemonCardComponent
  ]
})
export class PokemonsModule { }
