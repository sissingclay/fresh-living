import { Component, Host, h } from '@stencil/core';
import {MDCRipple} from '@material/ripple';


@Component({
  tag: 'lf-button',
  styleUrl: 'lf-button.scss',
  shadow: true,
})
export class LfButton {
  ripple!: HTMLInputElement;
  connectedCallback(): void {
    new MDCRipple(this.ripple);
  }

  render() {
    return (
      <Host>
        <button class="mdc-button">
          <div class="mdc-button__ripple" ref={(el) => this.ripple = el as HTMLInputElement}></div>
          <span class="mdc-button__label">Button</span>
      </button>
      </Host>
    );
  }

}
