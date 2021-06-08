function validateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
        alert("valid email address!");
        document.emailForm.focus();
        return true;
    }
    else {
        alert("invalid email address!");
        document.emailForm.focus();
        return false;
    }
}