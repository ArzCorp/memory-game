import { html, css, LitElement } from 'lit'

class SimpleButton extends LitElement {
	static properties = {
		active: { type: Boolean },
	}

	static styles = css`
		button {
			cursor: pointer;
			padding: 8px 25px;
			font-size: 1.8rem;
			transition: all 0.3s ease-in-out;
			border: none;
			border-radius: 3px;
		}

		.button-simple {
			background-color: #00464b;
			color: #f3f8fa;
		}

		.button-active {
			background-color: #26c2ac;
			color: #0f172a;
		}

		button:hover {
			opacity: 0.8;
		}
	`

	constructor() {
		super()
		this.active = false
	}

	render() {
		return html`
			<button class="${this.active ? 'button-active' : 'button-simple'}">
				<slot></slot>
			</button>
		`
	}
}

customElements.define('simple-button', SimpleButton)
