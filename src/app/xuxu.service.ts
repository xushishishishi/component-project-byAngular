import { Injectable } from '@angular/core';
import { XuxuClass } from './xuxu-class';
import { xuxuTestMock } from '../assets/mock';

/*
XuxuService 类将会提供一个可注入的服务，并且它还可以拥有自己的待注入的依赖。 目前它还没有依赖.
@Injectable() 装饰器会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样
*/

@Injectable({
  providedIn: 'root'
})
export class XuxuService {

  constructor() { }
  getXuxuTestMock(): XuxuClass[] {
    return xuxuTestMock;
  }
}
