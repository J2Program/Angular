import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  constructor(
    public globals: Globals,
    private router: Router
  ) { }

  private user = new FormGroup({
    firstName: new FormControl(this.globals.SIGNUP.firstName),
    lastName: new FormControl(this.globals.SIGNUP.lastName),
    email: new FormControl(this.globals.SIGNUP.email),
    mobile: new FormControl(this.globals.SIGNUP.mobile),
    dateOfBirth: new FormControl(this.globals.SIGNUP.dateOfBirth),
    gender: new FormControl(this.globals.SIGNUP.gender),
    phoneNumber: new FormControl(this.globals.SIGNUP.phoneNumber)
  });

  onSubmit = () => {
    this.globals.SIGNUP = this.user.value;
    this.router.navigate(['preview']);
  }

  ngOnInit() {
  }

}
