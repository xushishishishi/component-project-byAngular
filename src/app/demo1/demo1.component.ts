import { Component, OnInit } from '@angular/core';
import { XuxuClass } from '../xuxu-class';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
  obj = [
    { id: 1, name: 'Mr. Nice' },
    { id: 2, name: 'Narco' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' },
    { id: 5, name: 'Magneta' },
    { id: 6, name: 'RubberMan' },
    { id: 7, name: 'Dynama' },
    { id: 8, name: 'Dr IQ' },
    { id: 9, name: 'Magma' },
    { id: 10, name: 'Tornado' }
  ]
  name = "2"
  values = ""

  test(i) {
    console.log(i.id, this.name)
  }

  submit() {
    console.log("submit", this.name)
  }

  onKey(event: any) { // without type info
    this.values = event.target.value + ' | ';
    console.log('onKey:', this.values)
  }

  onBlur(event: any) { // without type info
    this.values = event.target.value + ' || ';
    console.log('onKey:', this.values)
  }

  xuxuDemo = new XuxuClass(11, "Class类new出来的对象")
}
