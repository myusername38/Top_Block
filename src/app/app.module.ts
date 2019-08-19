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
import { LeaderboardsComponent } from './pages/leaderboards/leaderboards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
import { RanksComponent } from './components/ranks/ranks.component';
import { HomeComponent } from './components/home/home.component';
import { VotingLinksComponent } from './components/voting-links/voting-links.component';
import { DiscordComponent } from './components/discord/discord.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerBlockComponent,
    LeaderboardComponent,
    HeaderComponent,
    NavComponent,
    NewsboxComponent,
    LeaderboardsComponent,
    RanksComponent,
    HomeComponent,
    VotingLinksComponent,
    DiscordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
