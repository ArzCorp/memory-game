import { html, css, LitElement } from 'lit'

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
		}
	}

	static get styles() {
		return css`
			* {
				box-sizing: border-box;
				display: block;
			}

			:host {
				width: 200px;
			}

			label {
				font-size: 1.4rem;
				margin-bottom: 5px;
			}

			.container {
				position: relative;
				width: 100%;
			}

			.container input {
				width: 100%;
				background-color: #f3f8fc;
				padding: 10px 0px;
				padding-right: 15px;
				text-align: right;
				border: none;
				border-radius: 8px;
			}

			.container app-icon {
				position: absolute;
				top: calc(50% - 10px);
				left: 7px;
			}
		`
	}

	constructor() {
		super()
		this.type = 'text'
	}

	render() {
		return html`
			<label htmlFor="${this.name}">${this.label}</label>
			<div class="container">
				<app-icon></app-icon>
				<input
					type="${this.type}"
					name="${this.name}"
					placeholder="${this.placeholder}"
				/>
			</div>
		`
	}
}

customElements.define('app-input', AppInput)
