import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  constructor(
    private location: Location
  ) {
  }

  ngOnInit() {
  }

  // 后退
  goBack(): void {
    this.location.back();
  }
}
