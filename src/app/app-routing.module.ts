import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RanksComponent } from './components/ranks/ranks.component';
import { VotingLinksComponent } from './components/voting-links/voting-links.component';
import { HomeComponent } from './components/home/home.component';
import { DiscordComponent } from './components/discord/discord.component';
import { CratesComponent } from './components/crates/crates.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ranks', component: RanksComponent, runGuardsAndResolvers: 'always' },
  { path: 'crates', component: CratesComponent,  runGuardsAndResolvers: 'always' },
  { path: 'discord', component: DiscordComponent },
  { path: 'votinglinks', component: VotingLinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
