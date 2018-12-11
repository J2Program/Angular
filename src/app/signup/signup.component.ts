import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    public globals: Globals
  ) { }

  private plan = this.globals.PLAN;

  private user = new FormGroup({
    firstName: new FormControl(this.globals.SIGNUP.firstName),
    lastName: new FormControl(this.globals.SIGNUP.lastName),
    email: new FormControl(this.globals.SIGNUP.email),
    mobile: new FormControl(this.globals.SIGNUP.mobile)
  });

  onSubmit = () => {
    this.globals.SIGNUP = this.user.value
    this.router.navigate(['plandetails']);
  }

  ngOnInit() { }

}
