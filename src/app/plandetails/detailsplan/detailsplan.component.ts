import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
  selector: 'app-detailsplan',
  templateUrl: './detailsplan.component.html',
  styleUrls: ['./detailsplan.component.sass']
})
export class DetailsplanComponent implements OnInit {

  constructor(
    public globals:Globals,
  ) { }
 

  selectPackage(plan){
    this.globals.PLAN = plan;
  }

  ngOnInit() {
  }

}
