import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo2-child',
  templateUrl: './demo2-child.component.html',
  styleUrls: ['./demo2-child.component.css']
})
export class Demo2ChildComponent implements OnInit {
  @Input() msg: any;  // 通过Input接收父组件传过来的数据msg

  constructor() { }

  ngOnInit() {
  }

}
