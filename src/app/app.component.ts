import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1>{{title}}</h1>
  // <h2>My favorite hero is: {{myHero}}</h2>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '许许的Demo';
  myHero = 'xuxu';
}
