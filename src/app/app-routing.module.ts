import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardsComponent } from './pages/leaderboards/leaderboards.component';
import { RanksComponent } from './components/ranks/ranks.component';
import { VotingLinksComponent } from './components/voting-links/voting-links.component';
import { HomeComponent } from './components/home/home.component';
import { DiscordComponent } from './components/discord/discord.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ranks', component: RanksComponent },
  { path: 'discord', component: DiscordComponent },
  { path: 'votinglinks', component: VotingLinksComponent },
  { path: 'leaderboards', component: LeaderboardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
