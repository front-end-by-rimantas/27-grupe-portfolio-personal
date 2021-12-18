function renderProjects(selector, data) {
    const DOM = document.querySelector(selector)
    let HTML = '';

    for (const i of data) {
        HTML += `
        <div class=" col-12 col-sm-4 col-lg-4 single_portfolio ${i.category}">
                <img src="${i.img}" alt="${i.alt}" class="images" />
                <a href="${i.img}">
                    <div class="grid_item_overlay">
                        <img src="./img/zoom.jpg" class="center">
                    </div>
                    <div class="portfolio_title">
                        <h4>${i.title}</h4>
                        <p>${i.text}</p>
                    </div>
                </a>
            </div>
        
        `;
    }
    DOM.innerHTML = HTML;

}



export { renderProjects }