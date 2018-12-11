import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.sass']
})
export class NavbuttonComponent implements OnInit {
  @Input() toLocation: string;
  @Input() buttonText: string;

  constructor(
    private router: Router
  ) { }

  onBack = () => {
    this.router.navigate([this.toLocation]);
  }

  ngOnInit() {
  }

}
