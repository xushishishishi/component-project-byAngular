import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  public msg = '这是父组件的数据';

  constructor() { }

  ngOnInit() {
    this.run()
  }

  run(){
    alert('这是父组件的run方法');
  }
  
}
