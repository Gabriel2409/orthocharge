import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeModeChanged = new BehaviorSubject<string>('light-mode');

  getNextTheme() {
    switch (this.themeModeChanged.value) {
      case 'dark-mode':
        this.themeModeChanged.next('light-mode');
        break;
      case 'light-mode':
        this.themeModeChanged.next('dark-mode');
    }
  }

  constructor() {}
}
