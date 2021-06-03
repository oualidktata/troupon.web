import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  @Input()
  name = '';
  title = 'troupon-header';
}
