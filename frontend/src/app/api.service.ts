import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Graphbook } from './graph/models/graphbook';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private All_data_URL = " https://fedspringweb-pcv6bfjcva-uc.a.run.app";
  private All_data_URL = "http://localhost:8082/Jobs";
  //private Snap_data = "http://localhost:8082/Jobs/{snapshotTsp}";

  constructor(private http: HttpClient) { }

  getalldata(): Observable<Graphbook[]> {
    return this.http.get<Graphbook[]>(this.All_data_URL);
  }

  getsnapdata(snapshotTsp): Observable<Graphbook[]> {
    const url = `${this.All_data_URL}/${snapshotTsp}`;
    return this.http.get<Graphbook[]>(url);
  }
}




