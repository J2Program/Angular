import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-feasibility',
  templateUrl: './feasibility.component.html',
  styleUrls: ['./feasibility.component.sass']
})
export class FeasibilityComponent implements OnInit {

  constructor(
    public globals:Globals
  ) { }

  private signup = JSON.stringify(this.globals.SIGNUP);

  ngOnInit() {
  }

}
