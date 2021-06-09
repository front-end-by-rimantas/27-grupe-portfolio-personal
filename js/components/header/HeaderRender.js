function renderHeader(selector) {

    const DOM = document.querySelector(selector);
    let HTML = '';



    HTML += `
    <div class="col-3">
                            <img class="headerImg" src="./img/headerLogo.png" alt="PORTFOLIO">
                                    </div>
                            <div class=" hidden col-8 ml-lg-1  visible-lg  ">
                                <a class="navBar" href="#" style="color: var(--color-blue);">home</a>
                                <a class="navBar" href="#">about</a>
                                <a class="navBar" href="#">services</a>
                                <a class="navBar" href="#">portfolio</a>
                                <a class="navBar" href="#">pricing</a>
                                <div class="navBar dropdown ">
                                    <span>blog <i class="fa fa-angle-down"></i></span>
                                    <div class="dropdown-content">
                                        <p class="navBar">blog home</p>
                                        <p class="navBar">blog single</p>
                                    </div>
                                </div>
                                <div class="navBar dropdown ">
                                    <span>pages <i class="fa fa-angle-down"></i></span>
                                    <div class="dropdown-content">
                                        <p class="navBar">elements</p>
                                        <div class="dropdown2">
                                            <p class="navBar">level 2 <i class="fa fa-angle-right"></i></p>
                                            <div class="dropdown-content2">
                                                <p class="navBar">item 1</p>
                                                <p class="navBar">item 2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="navBar" href="#">contact</a>
                            </div>
                            <div class="col-1 ml-8 visible-md hidden-lg sidebarEngade">
                                <button class="hamburger"><i class=" fa fa-bars"></i></button>
                            </div>
                            </div>` ;


    DOM.innerHTML = HTML;

}

export { renderHeader }