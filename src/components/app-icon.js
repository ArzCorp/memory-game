import { html, css, LitElement } from 'lit'

class AppIcon extends LitElement {
	static get properties() {
		return {
			icon: { type: String },
		}
	}

	static get styles() {
		return css`
			:host {
				display: inline-block;
				width: 20px;
				height: 20px;
			}

			.icon {
				width: 100%;
				height: 100%;
			}
		`
	}

	constructor() {
		super()
		this.icon = 'money'
	}

	render() {
		return html`<img class="icon" src="/src/assets/icons/${this.icon}.svg"></img> `
	}
}

customElements.define('app-icon', AppIcon)
