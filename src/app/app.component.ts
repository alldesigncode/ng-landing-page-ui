import {
  Component,
  ViewChild,
  ElementRef,
  Inject,
  AfterViewChecked,
} from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';
import { boxes } from './helpers/boxes';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  boxes = boxes;
  @ViewChild('list') list: ElementRef<HTMLDivElement>;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewChecked() {
    this.scrollToBox();
  }

  transitionEnd(e: TransitionEvent): void {
    if (e.propertyName === 'height') {
      this.scrollToBox();
    }
  }

  scrollToBox(): void {
    if (this.document.querySelector('.box.active')) {
      this.document
        .querySelector('.box.active')
        .scrollIntoView({ behavior: 'smooth' });
    }
  }

  goBackIfActive(routerLink: RouterLinkActive): void {
    if (routerLink.isActive) {
      this.router.navigate(['/']);
      this.list.nativeElement.classList.remove('overflow-hidden');
    } else {
      this.list.nativeElement.classList.add('overflow-hidden');
    }
  }
}
