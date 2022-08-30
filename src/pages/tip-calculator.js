import { html, css, LitElement } from 'lit'

import '../components/app-input.js'
import '../components/simple-button.js'

class TipCalculator extends LitElement {
	static get is() {
		return 'tip-calculator'
	}

	static get properties() {
		return {
			bill: { type: Number },
			people: { type: Number },
			tipAmount: { type: Number },
			tipPercentage: { type: Number },
		}
	}

	static get styles() {
		return css``
	}

	constructor() {
		super()
		this.bill = 0
		this.people = 0
		this.tipAmount = 0
		this.tipPercentage = 0
	}

	get tipPerPerson() {
		if (this.bill && this.people && this.tipPercentage)
			return (this.bill * this.tipPercentage) / this.people
		return 0
	}

	get totalPerPerson() {
		if (this.bill && this.people && this.tipPerPerson)
			return this.bill / this.people + this.tipPerPerson
		return 0
	}

	render() {
		return html`<div>
			<div>
				<app-input
					type="number"
					.change="${(e) => {
						this.bill = e.target.value
					}}"
				></app-input>
				<div>
					<simple-button
						.click="${() => {
							this.tipPercentage = 0.05
						}}"
						>5%</simple-button
					>
					<simple-button .click="${() => (this.tipPercentage = 0.1)}"
						>10%</simple-button
					>
					<simple-button
						.click="${() => {
							this.tipPercentage = 0.15
						}}"
						>15%</simple-button
					>
					<simple-button
						.click="${() => {
							this.tipPercentage = 0.25
						}}"
						>25%</simple-button
					>
					<simple-button
						.click="${() => {
							this.tipPercentage = 0.5
						}}"
						>50%</simple-button
					>
					<app-input
						type="number"
						.change="${(e) => {
							this.tipPercentage = e.target.value / 100
						}}"
					></app-input>
				</div>
				<app-input
					type="number"
					.change="${(e) => {
						this.people = e.target.value
					}}"
				></app-input>
			</div>
			<div>
				<div>
					<p>
						Tip Amount
						<span>/ person</span>
					</p>
					<p>$${this.tipPerPerson}</p>
				</div>
				<div>
					<p>
						Total
						<span>/ person</span>
					</p>
					<p>$${this.totalPerPerson}</p>
				</div>
			</div>
		</div>`
	}
}

window.customElements.define(TipCalculator.is, TipCalculator)
