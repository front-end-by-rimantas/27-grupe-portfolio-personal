function renderHero(selector) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    HTML +=
        ` <div class="personalD container">
            <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
                <h4>This is me</h4>
                <h1 class="section-title left">Philip Gilbert</h1>
                <p class="section-description left">You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.</p>
                <a href="#" class="btn">Discover now</a>
            </div>
            <img class="col-10 ml-1 col-md-6 ml-md-0 col-lg-6" src="img/this-is-me.jpg" alt="Photo of Philip Gilbert" />
        </div>
    </div>`;
    DOM.innerHTML = HTML;
}


export { renderHero }
