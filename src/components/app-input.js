import { html, css, LitElement } from 'lit'
import { generalStyles } from '../utils/generalStyles'

class AppInput extends LitElement {
	static get properties() {
		return {
			label: { type: String },
			name: { type: String },
			type: { type: String },
			value: { type: String },
			placeholder: { type: String },
			disabled: { type: Boolean },
			required: { type: Boolean },
			error: { type: String },
			icon: { type: String },
			change: { type: Function },
		}
	}

	static get styles() {
		return [
			generalStyles,
			css`
				* {
					box-sizing: border-box;
					display: block;
				}

				:host {
					width: 100%;
					border-radius: 8px;
				}

				:host([error]) input {
					border: 3px solid #c88573;
				}

				:host([error]) input:focus {
					outline: none;
				}

				label {
					margin-bottom: 5px;
					color: var(--color-dark-gray);
					font-weight: 700;
				}

				.container {
					position: relative;
					width: 100%;
				}

				.input {
					width: 100%;
					min-height: 50px;
					max-height: 50px;
					background-color: #f3f8fc;
					padding: 10px 0px;
					padding-right: 15px;
					text-align: right;
					border: none;
					border-radius: 8px;
					transistion: all 1s;
					color: #1e5758;
					font-weight: 700;
					placeholder: #abbaba;
				}

				.container input:focus {
					outline: solid #74c5b8;
				}

				.container app-icon {
					position: absolute;
					top: calc(50% - 7.5px);
					left: 7px;
				}

				.label-container {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.error-message {
					color: #c88573;
					font-weight: 600;
				}
			`,
		]
	}

	constructor() {
		super()
		this.type = 'text'
	}

	render() {
		return html`
			${this.label
				? html`<div class="label-container">
						<label htmlFor="${this.name}">${this.label}</label>
						<span class="error-message">${this.error}</span>
				  </div>`
				: null}
			<div class="container">
				<app-icon></app-icon>
				<input
					@input="${this.change}"
					class="input"
					type="${this.type}"
					name="${this.name}"
					placeholder="${this.placeholder}"
				/>
			</div>
		`
	}
}

customElements.define('app-input', AppInput)
