import { Component, ElementRef, Renderer2 } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MENU } from '../../app-routing.module';

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggleNav = false;
  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
  );
  navItems = MENU;

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _overlayContainer: OverlayContainer
  ) {}

  toggleFullscreen() {
    const elem = <any>document.getElementsByTagName('body');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
