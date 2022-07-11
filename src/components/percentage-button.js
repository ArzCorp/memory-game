import { html, LitElement } from 'lit'

class PercentageButton extends LitElement {
	constructor() {
		super()
		this.session = document.querySelector('#session')
	}

	static get properties() {
		return {
			percentage: { type: Number },
		}
	}

	render() {
		return html`
			<button
				@click=${() => (this.session.currentPercentage = this.percentage)}
			>
				${this.percentage}%
			</button>
		`
	}
}

customElements.define('percentage-button', PercentageButton)
