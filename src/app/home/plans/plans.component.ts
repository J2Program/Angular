import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../../globals';



@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.sass']
})

export class PlansComponent implements OnInit {

  constructor(
    private router: Router,
    public globals: Globals
  ) { }

  selectPackage(plan) {
    this.globals.PLAN = plan;
    this.router.navigate(['signup']);
  }

  ngOnInit() { }

}
