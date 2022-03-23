import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}
  currentTheme = 'light';

  changeTheme() {
    if (this.currentTheme == 'light') {
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
      this.currentTheme = 'dark';
    } else if (this.currentTheme == 'dark') {
      this.renderer.addClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
      this.currentTheme = 'light';
    }
  }
}
