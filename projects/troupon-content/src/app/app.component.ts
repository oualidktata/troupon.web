import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'troupon-content';
}
