function renderCategories(selector) {

    const DOM = document.querySelector(selector);
    let HTML = '';



    HTML += ` <div class="row">
            <div class="categories">
                <ul>
                    <li class="active" data-filter="all">All</li>
                    <li data-filter="vector">VECTOR</li>
                    <li data-filter="raster">RASTER</li>
                    <li data-filter="ui/ux">UI/UX</li>
                    <li data-filter="printing">PRINTING</li>
                </ul>
            </div>
        </div>`;
    DOM.innerHTML = HTML;
}
export { renderCategories }

