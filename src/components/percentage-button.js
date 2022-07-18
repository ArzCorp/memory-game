import { html, LitElement } from 'lit'

class PercentageButton extends LitElement {
	constructor() {
		super()
		this.tipCalculator = document.querySelector('#session')
	}

	static get properties() {
		return {
			percentage: { type: Number },
			isActive: { type: Boolean },
		}
	}

	render() {
		return html`
			<style>
				button {
					background-color: ${this.isActive ? 'red' : '#fff'};
				}
			</style>
			<button
				@click=${() => (this.tipCalculator.percentageAmount = this.percentage)}
			>
				${this.percentage}%
			</button>
		`
	}
}

customElements.define('percentage-button', PercentageButton)
