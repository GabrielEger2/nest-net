import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() label: string = 'Click Me';
  @Input() disabled: boolean = false;
  @Input() variant: 'primary' | 'secondary' | 'accent' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
