import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoasterSearchModel } from 'src/models/CoasterSearchModel';

@Injectable({
  providedIn: 'root'
})
export class CaptainCoasterService {

  constructor(private http: HttpClient) { }

  getCoastersByPage(page: number) {
    return this.http.get<CoasterSearchModel>(`api/coasters?page=${page}`);
  }

}
