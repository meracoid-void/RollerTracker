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
  coasterName!: string;

  constructor(private coasterService: CaptainCoasterService) { }

  ngOnInit(): void {
    this.search();
  }

  pageBack(){
    this.pageNumber -= 1;
    this.search();
  }

  pageForward(){
    this.pageNumber += 1;
    this.search();
  }

  search(){
    this.coasterService.getCoastersByPage(this.pageNumber, this.coasterName).subscribe(x =>{
      this.coasters = x['hydra:member'];
      this.total = x['hydra:totalItems'];
      this.ending = 30 * this.pageNumber;
      this.starting = this.ending - 29;
    });
  }

  onNameSubmit(){
    this.pageNumber = 1;
    this.search();
  }

}
