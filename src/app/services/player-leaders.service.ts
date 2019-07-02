import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../player';


@Injectable({
  providedIn: 'root'
})
export class PlayerLeadersService {
  private leader_url = "../../assets/top_island_data.json";
  constructor(private http: HttpClient) { }

  getTopIslands(){
    return this.http.get<Player[]> (this.leader_url); 
  }
}
