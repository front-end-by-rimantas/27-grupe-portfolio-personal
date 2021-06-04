function renderSidebar(selector) {

    const DOM = document.querySelector(selector);
    const navBar = ['about', 'services', 'portfolio', 'pricing', 'blog', 'pages', 'contact']
    let HTML = '';

    for (let i = 0; i < navBar.length; i++)
        HTML += `<a class="navBar" href="#">${navBar[i]}</a>`;
    DOM.innerHTML = HTML;
}

export { renderSidebar }