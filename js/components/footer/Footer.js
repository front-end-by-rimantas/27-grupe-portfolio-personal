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

/*
function renderFooter(selector) {
    const DOM = document.querySelector(selector);
    const HTML =

}
*/