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
				width: 15px;
				height: 15px;
			}

			.icon {
				width: 100%;
				height: 100%;
				filter: invert(83%) sepia(2%) saturate(1436%) hue-rotate(131deg)
					brightness(90%) contrast(86%);
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
