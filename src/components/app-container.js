import { html, css, LitElement } from 'lit'

class AppContainer extends LitElement {
	static get styles() {
		return css`
			main {
				min-height: 100vh;
				display: grid;
				place-content: center;
				background-color: #c5e4e7;
			}
		`
	}
	render() {
		return html`
			<main>
				<slot></slot>
			</main>
		`
	}
}

customElements.define('app-container', AppContainer)
