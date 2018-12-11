import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

  constructor(
    public globals: Globals,
    private router: Router
  ) { }

  private preview = JSON.stringify(this.globals.SIGNUP);

  onSumbit = () => {
    this.router.navigate(['payment']);
  }

  ngOnInit() {
    
  }

}
