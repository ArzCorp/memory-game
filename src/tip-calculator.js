import { html, LitElement } from 'lit'

class TipCalculator extends LitElement {
	constructor() {
		super()
		this.tip = 0
		this.percentageAmount = 5
		this.receiptAmount = 0
		this.peopleAmount = 1
	}

	calculateTip() {
		this.tip = 10
	}

	static get properties() {
		return {
			tip: { type: Number },
			receiptAmount: { type: Number },
			percentageAmount: { type: Number },
			peopleAmount: { type: Number },
		}
	}

	render() {
		return html`
			<main>
				<div>
					<text-input
						label="Costo del recibo"
						name="receipt"
						.handleClick=${(e) => (this.receiptAmount = e.target.value)}
					></text-input>
				</div>
				<percentage-button
					.isActive=${this.percentageAmount === 5}
					.percentage=${5}
				></percentage-button>
				<percentage-button
					.isActive=${this.percentageAmount === 10}
					.percentage=${10}
				></percentage-button>
				<percentage-button
					.isActive=${this.percentageAmount === 15}
					.percentage=${15}
				></percentage-button>
				<percentage-button
					.isActive=${this.percentageAmount === 25}
					.percentage=${25}
				></percentage-button>
				<percentage-button
					.isActive=${this.percentageAmount === 50}
					.percentage=${50}
				></percentage-button>
				<text-input
					icon="./src/icons/person.svg"
					name="people"
					.handleClick=${(e) => (this.peopleAmount = e.target.value)}
				></text-input>
				<button-component .handleClick=${() => this.calculateTip()}>
					Calcular</button-component
				>
				<p>${this.tip}</p>
			</main>
		`
	}
}

customElements.define('tip-calculator', TipCalculator)
