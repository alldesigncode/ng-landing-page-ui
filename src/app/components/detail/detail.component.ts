import { Component, Input } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { revealDetailPageAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [revealDetailPageAnimation],
})
export class DetailComponent {
  @Input() active: RouterLinkActive;
}
