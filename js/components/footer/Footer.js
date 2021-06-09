function validateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
        alert("valid email address!");
        emailForm.focus();
        return true;
    }
    else {
        alert("invalid email address!");
        emailForm.focus();
        return false;
    }
}


function renderFooter(selector) {
    const DOM = document.querySelector(selector);
    const HTML = `<div class="col-12 col-sm-6 col-lg-5 footerAbout">
            <h4>About Me</h4>
            <p>We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience</p>
            <p> Copyrights &copy;2020 All rights reserved|This template is made with ♥ By <a href="">Colorlib</a></p>
        </div>
        <div class="col-12 col-sm-6 col-lg-5 ">
            <h4>Newsletter</h4>
            <p>Stay update with uor latest trends</p>
            <form class="col-12 col-sd-6 ml-md-1 emailForm ">
                <input class="emailFooter" placeholder="Enter Email Adress" type="email" required>
                    <button class="btnFooter" type="submit"><i class="fa fa-arrow-right"></i></button>
                </form>
            </div>
            <div class="col-12 col-sm-12 col-lg-2 ">
                <div class="footerFollow">
                    <h4>Follow Me</h4>
                    <p>Let us bes social</p>
                    <div class="footerSocials">
                        <a href="#" class="fa fa-facebook" target="_blank"></a>
                        <a href="#" class="fa fa-twitter" target="_blank"></a>
                        <a href="#" class="fa fa-dribbble" target="_blank"></a>
                        <a href="#" class="fa fa-behance" target="_blank"></a>
                    </div>
                </div>
            </div>`
}
