import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  agreed = 0;
  disagreed = 0;
  voters = [...['Mr. IQ', 'Ms. Universe', 'Bombasto']];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
