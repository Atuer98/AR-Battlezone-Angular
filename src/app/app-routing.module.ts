import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArenaSelectionComponent } from './arenaSelectionComponent/ArenaSelectionComponent';
import { CharacterSelectionComponent } from './CharacterSelectionComponent/CharacterSelectionComponent';
import { CreateSessionComponent } from './createSessionCompnent/CreateSessionComponent';
import { HighScoreComponent } from './highScoreComponent/highScoreComponent';
import { IndexComponent } from './IndexComponent/IndexComponent';
import { JoinGameComponent } from './joinGameComponent/joinGameComponent';

const routes: Routes = [
  {path: '', redirectTo: '/index',pathMatch:'full'},
  {path: 'createsession', component:CreateSessionComponent},
  {path: 'joingame', component:JoinGameComponent},
  {path: 'index', component:IndexComponent},
  {path: 'highscore', component:HighScoreComponent},
  {path: 'arenaselection',component: ArenaSelectionComponent},
  {path: 'charakterselection', component:CharacterSelectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
