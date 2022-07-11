import { html, css, LitElement } from 'lit'

class TextInput extends LitElement {
	constructor() {
		super()
		this.icon = './src/icons/money.svg'
	}

	static styles = css`
		.text-input {
			margin-bottom: 10px;
		}

		.text-input label {
			display: block;
			margin-bottom: 5px;
		}

		.text-input__container {
			position: relative;
			display: flex;
			align-items: center;
		}

		.text-input__container img {
			position: absolute;
			left: 16px;
			width: 16px;
			height: 16px;
		}

		.text-input__container input {
			padding: 10px;
			padding-left: 26px;
			width: 100%;
		}
	`

	static get properties() {
		return {
			name: { type: String },
			icon: { type: String },
			handleClick: { type: Function },
			label: { type: String },
		}
	}

	render() {
		return html`
			<div class="text-input">
				<label htmlFor=${this.name}>${this.label}</label>
				<div class="text-input__container">
					<img src=${this.icon} alt="Símbolo de dinero" />
					<input name=${this.name} type="text" @change=${this.handleClick} />
				</div>
			</div>
		`
	}
}

customElements.define('text-input', TextInput)
