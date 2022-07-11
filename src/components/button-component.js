import { html, LitElement } from 'lit'

class ButtonComponent extends LitElement {
	constructor() {
		super()
	}

	static get properties() {
		return {
			handleClick: { type: Function },
		}
	}

	render() {
		return html`
			<button @click=${this.handleClick} type="button"><slot></slot></button>
		`
	}
}

customElements.define('button-component', ButtonComponent)
