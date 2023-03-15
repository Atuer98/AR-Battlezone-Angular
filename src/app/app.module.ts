import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateSessionComponent } from './createSessionCompnent/CreateSessionComponent';
import { IndexComponent } from './IndexComponent/IndexComponent';
import { JoinGameComponent } from './joinGameComponent/joinGameComponent';
import { HighScoreComponent } from './highScoreComponent/highScoreComponent';
import { ArenaSelectionComponent } from './arenaSelectionComponent/ArenaSelectionComponent';
import { CharacterSelectionComponent } from './CharacterSelectionComponent/CharacterSelectionComponent';
import { SocketioService } from './socketioService';

@NgModule({
  declarations: [
    AppComponent,
    CreateSessionComponent,
    IndexComponent,
    JoinGameComponent,
    HighScoreComponent,
    ArenaSelectionComponent,
    CharacterSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
