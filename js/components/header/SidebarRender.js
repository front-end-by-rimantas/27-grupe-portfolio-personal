function renderSidebar(selector, data) {

    const DOM = document.querySelector(selector);

    let HTML = '';

    for (const nav of data)
        HTML += `<a class="navBar" href="${nav.href}">${nav.name}</a>`;
    DOM.innerHTML = HTML;
}

export { renderSidebar }