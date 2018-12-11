import { Component, OnInit } from '@angular/core';
import { Globals } from './globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'signup-portal';

  constructor(
    public globals:Globals,
    private router:Router
  ){}

  ngOnInit() {
    if (!this.globals.PLAN) {
      this.router.navigate(['/']);
    }
  }

}
