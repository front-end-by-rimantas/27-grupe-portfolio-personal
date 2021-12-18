function renderCategories(selector) {

    const DOM = document.querySelector(selector);
    let HTML = '';



    HTML += ` <div class="row">
            <div class="categories">
                    <button class="active allFilter" >All</button>
                    <button class="vectorFilter">VECTOR</button>
                    <button class="rasterFilter">RASTER</button>
                    <button class="uiFilter">UI/UX</button>
                    <button class="printingFilter">PRINTING</button>
            </div>
        </div>`;
    DOM.innerHTML = HTML;


}
export { renderCategories }

