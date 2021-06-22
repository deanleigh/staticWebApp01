class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
        <h2>This is a footer</h2>
        <p>This is a footer</p>
        `;
    }
}

customElements.define("my-footer", MyFooter);










