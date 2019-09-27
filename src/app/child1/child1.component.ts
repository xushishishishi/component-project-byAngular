import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input() msg: any;  // 通过Input接收父组件传过来的数据msg
  
  constructor() { }

  ngOnInit() {
  }

}
