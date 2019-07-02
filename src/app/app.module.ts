import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerBlockComponent } from './components/player-block/player-block.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { NewsboxComponent } from './components/newsbox/newsbox.component';
import { HomeComponent } from './pages/home/home.component';
import { RanksComponent } from './pages/ranks/ranks.component';
import { RankTileComponent } from './components/rank-tile/rank-tile.component';
import { RankPageComponent } from './components/rank-page/rank-page.component';
import { DiscordComponent } from './pages/discord/discord.component';
import { LeaderboardsComponent } from './pages/leaderboards/leaderboards.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerBlockComponent,
    LeaderboardComponent,
    HeaderComponent,
    NavComponent,
    NewsboxComponent,
    HomeComponent,
    RanksComponent,
    RankTileComponent,
    RankPageComponent,
    DiscordComponent,
    LeaderboardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
