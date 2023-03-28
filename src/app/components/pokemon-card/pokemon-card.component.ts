import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TypeIconComponent } from '../type-icon/type-icon.component';

@Component({
  standalone: true,
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    TypeIconComponent
  ]
})
export class PokemonCardComponent {

}
