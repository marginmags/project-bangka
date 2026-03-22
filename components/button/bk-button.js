import { LitElement, html, css } from 'lit';

/**
 * Triggers an action. Use primary for the dominant action, secondary for supporting ones, destructive for irreversible operations.
 * @element bk-button
 * @property {primary} type
 * @property {medium | small} size
 * @slot icon - instance slot
 * @slot - Default slot for text content
 */
class BkButton extends LitElement {
  static properties = {
    type: { type: String, reflect: true },
    size: { type: String, reflect: true }
  };

  static styles = css`
    :host {
      display: inline-flex;
    }

    /* primary / medium */
    :host([type="primary"][size="medium"]) button {
      border-radius: var(--radius-md);
      padding-block: var(--sp-2);
      padding-inline: var(--sp-3);
      gap: var(--sp-1);
      background: var(--interactive-default);
      color: var(--text-inverse);
    }
    :host([type="primary"][size="medium"]:hover) button {
      background: var(--interactive-hover);
    }
    :host([type="primary"][size="medium"]:focus-visible) button {
      background: var(--interactive-focus);
    }
    :host([type="primary"][size="medium"]:disabled) button {
      background: var(--interactive-disabled-bg);
      color: var(--interactive-disabled);
      cursor: not-allowed;
      pointer-events: none;
    }

    /* primary / small */
    :host([type="primary"][size="small"]) button {
      border-radius: var(--radius-md);
      padding-block: var(--sp-1);
      padding-inline: var(--sp-2);
      gap: var(--sp-1);
      background: var(--interactive-default);
      color: var(--text-inverse);
    }
    :host([type="primary"][size="small"]:hover) button {
      background: var(--interactive-hover);
    }
    :host([type="primary"][size="small"]:focus-visible) button {
      background: var(--interactive-focus);
    }
    :host([type="primary"][size="small"]:disabled) button {
      background: var(--interactive-disabled-bg);
      color: var(--interactive-disabled);
      cursor: not-allowed;
      pointer-events: none;
    }

    button {
      display: inline-flex;
      align-items: center;
      gap: var(--sp-2, 8px);
      border: none;
      cursor: pointer;
      font-family: var(--font-sans, system-ui, sans-serif);
      font-weight: var(--fw-regular, 400);
      transition: background 0.15s, border-color 0.15s;
    }

    ::slotted([slot="icon"]) {
      display: flex;
      flex-shrink: 0;
    }
    :host([type="primary"][size="medium"]) ::slotted([slot="icon"]) {
      width: var(--icon-xl);
      height: var(--icon-xl);
    }
    :host([type="primary"][size="small"]) ::slotted([slot="icon"]) {
      width: var(--icon-md);
      height: var(--icon-md);
    }
  `;

  constructor() {
    super();
    this.type = 'primary';
    this.size = 'medium';
  }

  render() {
    return html`<button part="button"><slot name="icon"></slot><slot></slot></button>`;
  }
}

customElements.define('bk-button', BkButton);

export { BkButton };