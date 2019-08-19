import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rank } from '../rank';


@Injectable({
  providedIn: 'root'
})
export class RanksService {
  private rank_url = "../../assets/ranks.json";
  constructor(private http: HttpClient) { }

  getRanks() {
    return this.http.get<Rank[]> (this.rank_url);
  }
}
