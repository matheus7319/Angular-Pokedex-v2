import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'pokemons', loadChildren: () => import('./modules/pokemons/pokemons.module').then(m => m.PokemonsModule) },
  { path: 'types', loadChildren: () => import('./modules/types/types.module').then(m => m.TypesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
