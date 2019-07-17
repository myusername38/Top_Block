import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RanksComponent } from './pages/ranks/ranks.component';
import { DiscordComponent } from './pages/discord/discord.component';
import { LeaderboardsComponent } from './pages/leaderboards/leaderboards.component';
import { VotinglinksComponent } from './pages/votinglinks/votinglinks.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ranks', component: RanksComponent, runGuardsAndResolvers: 'always'},
  {path: 'discord', component: DiscordComponent},
  {path: 'leaderboards', component: LeaderboardsComponent},
  {path: 'votinglinks', component: VotinglinksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
