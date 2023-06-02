import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaptainCoasterService {

  constructor(private http: HttpClient) { }

  getCoastersByPage(page: number){
    return this.http.get(`api/coasters?page=${page}`);
  }

}
