import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {

  constructor(
    public globals: Globals,
    private router: Router
  ) { }

  ngOnInit() { }

}
