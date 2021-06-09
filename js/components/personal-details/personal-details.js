function renderPersonal(selector) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    HTML += `
        <div class="row">
            <img class="PDimg col-10 col-md-6 col-lg-6" src="./img/personalDetails.jpg" alt="img2" />
            <div class="col-12 col-md-6 col-lg-6">
                <h2 class="titleSmall">about me</h2>
                <h1 class="titleBig">personal details</h1>
                <p class="PDparagraph">
                    Here, I focus on a range of items and features that we use in life
                    without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <a href="#" class="btn">view full details</a>
            </div>
        </div>
    </div>`;

    DOM.innerHTML = HTML;
}


export { renderPersonal }