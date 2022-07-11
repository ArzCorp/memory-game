import { html, LitElement } from 'lit'

class TipCalculator extends LitElement {
	constructor() {
		super()
		this.tip = 0
		this.session = document.querySelector('#session')
	}

	calculateTip() {
		return this.session.tip.toFixed(2)
	}

	static get properties() {
		return {
			tip: { type: Number },
		}
	}

	render() {
		return html`
			<main>
				<div>
					<text-input
						label="Costo del recibo"
						name="receipt"
						.handleClick=${(e) => (this.session.receiptAmount = e.target.value)}
					></text-input>
				</div>
				<percentage-button .percentage=${5}></percentage-button>
				<percentage-button .percentage=${10}></percentage-button>
				<percentage-button .percentage=${15}></percentage-button>
				<percentage-button .percentage=${25}></percentage-button>
				<percentage-button .percentage=${50}></percentage-button>
				<text-input
					icon="./src/icons/person.svg"
					name="people"
					.handleClick=${(e) => (this.session.currentPeople = e.target.value)}
				></text-input>
				<button-component
					.handleClick=${() => (this.tip = this.calculateTip())}
				>
					Calcular</button-component
				>
				<p>${this.tip}</p>
			</main>
		`
	}
}

customElements.define('tip-calculator', TipCalculator)
