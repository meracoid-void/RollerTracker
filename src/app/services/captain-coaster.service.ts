import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoasterSearchModel } from 'src/models/CoasterSearchModel';

@Injectable({
  providedIn: 'root'
})
export class CaptainCoasterService {

  constructor(private http: HttpClient) { }

  getCoastersByPage(page: number, name?: string | null, manufacturerName?: string | null) {
    let url = `api/coasters?page=${page}`;
    if(name){
      url += `&name=${name}`;
    }
    if(manufacturerName){
      url += `&manufacturer=${manufacturerName}`;
    }
    return this.http.get<CoasterSearchModel>(url);
  }

}
