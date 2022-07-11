import { LitElement } from 'lit'

class UserSession extends LitElement {
	constructor() {
		super()
		this.receiptAmount = 0
		this.currentPercentage = 5
	}

	static get properties() {
		return {
			id: { type: String },
			receiptAmount: { type: Number },
			currentPercentage: { type: Number },
			currentPeople: { type: Number },
		}
	}

	get tip() {
		return (
			(this.receiptAmount * (this.currentPercentage / 100)) / this.currentPeople
		)
	}
}

customElements.define('user-session', UserSession)
