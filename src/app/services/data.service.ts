import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crate } from '../interfaces/crate';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCrates(): Promise<Crate[]> {
    return this.http.get<Crate[]>('../../assets/crates.json').toPromise();
  }


}
