import { Component, OnInit } from '@angular/core';
import { CaptainCoasterService } from 'src/app/services/captain-coaster.service';
import { CoasterSearchModel, Coaster } from 'src/models/CoasterSearchModel';

@Component({
  selector: 'app-roller-list',
  templateUrl: './roller-list.component.html',
  styleUrls: ['./roller-list.component.css']
})
export class RollerListComponent implements OnInit {
  coasters?: Coaster[];
  pageNumber = 1;
  total: number = 0;
  starting: number = 1;
  ending: number = 30;

  constructor(private coasterService: CaptainCoasterService) { }

  ngOnInit(): void {
    this.coasterService.getCoastersByPage(1).subscribe(x =>{
      this.coasters = x['hydra:member'];
      this.total = x['hydra:totalItems'];
    });
  }

  pageBack(){
    this.pageNumber -= 1;
    this.coasterService.getCoastersByPage(this.pageNumber).subscribe(x =>{
      this.coasters = x['hydra:member'];
      this.ending = 30 * this.pageNumber;
      this.starting = this.ending - 29;
    });
  }

  pageForward(){
    this.pageNumber += 1;
    this.coasterService.getCoastersByPage(this.pageNumber).subscribe(x =>{
      this.coasters = x['hydra:member'];
      this.ending = 30 * this.pageNumber;
      this.starting = this.ending - 29;
    });
  }

}
