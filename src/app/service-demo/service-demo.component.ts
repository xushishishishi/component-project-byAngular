import { Component, OnInit } from '@angular/core';
import { XuxuService } from '../xuxu.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {

  constructor(private xuxuService: XuxuService) { }

  ngOnInit() {
    // 调用getXuxuTestMock方法
    this.getXuxuTestMock();
  }
  
  // 初始化xuxuTestMock
  xuxuTestMock
  getXuxuTestMock(): void {
    this.xuxuTestMock = this.xuxuService.getXuxuTestMock();
    console.log('xuxuTestMock:', this.xuxuTestMock)
  }
}
