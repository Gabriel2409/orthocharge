import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, OnDestroy {
  themeModeChangedSubscription: Subscription | null = null;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      // result is a BreakpointState but we only want the boolean value (matches)
      map((result) => result.matches),
      // we want all the subscriptions to listen to the most recent value
      shareReplay()
    );
  // note: we use the async pipe in the html = syntactic sugar to subscribe to the
  // observable and unsubscribe from it when component is destroyed

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    public themeService: ThemeService
  ) {}
  ngOnDestroy(): void {
    if (this.themeModeChangedSubscription)
      this.themeModeChangedSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.themeModeChangedSubscription =
      this.themeService.themeModeChanged.subscribe({
        next: (themeMode) => {
          this.renderer.setAttribute(document.body, 'data-theme', themeMode);
        },
      });
  }
}
