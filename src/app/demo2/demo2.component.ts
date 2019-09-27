import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  public msg = '这是父组件的数据';
  constructor(
    private location: Location
  ) {
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
