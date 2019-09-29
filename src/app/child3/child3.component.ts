import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  @Input() name: string;
  // 创建EventEmitter类的实例，该实例可以同步或异步传递事件
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed:boolean){
    /* 
      * emit：发出包含给定值的事件。
      * @param value：需要发出的值
     */
    this.voted.emit(agreed)
    this.didVote = true
  }

  constructor() { }

  ngOnInit() {
  }

}
