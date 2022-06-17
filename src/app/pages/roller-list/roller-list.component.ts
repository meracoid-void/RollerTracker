import { Component, OnInit } from '@angular/core';
import { CaptainCoasterService } from 'src/app/services/captain-coaster.service';

@Component({
  selector: 'app-roller-list',
  templateUrl: './roller-list.component.html',
  styleUrls: ['./roller-list.component.css']
})
export class RollerListComponent implements OnInit {

  constructor(private coasterService: CaptainCoasterService) { }

  ngOnInit(): void {
    this.coasterService.getCoastersByPage(1).subscribe(x =>{
      console.log(x);
    });
  }

}
