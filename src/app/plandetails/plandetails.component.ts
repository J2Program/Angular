import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plandetails',
  templateUrl: './plandetails.component.html',
  styleUrls: ['./plandetails.component.sass']
})
export class PlandetailsComponent implements OnInit {

  constructor(
    public globals: Globals,
    private router: Router
  ) { }

  private signup = JSON.stringify(this.globals.SIGNUP);

  onSubmit = () => {
    this.router.navigate(['registration']);
  }

  ngOnInit() { }

}
