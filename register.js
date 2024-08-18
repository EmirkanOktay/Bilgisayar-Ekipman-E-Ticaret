let button = document.querySelector("#register");
let pass = document.querySelector("#password");
let pass2 = document.querySelector("#password2");
let mail = document.querySelector("#mail");
let trueAlert = document.querySelector("#trueAlert");
let falseAlert = document.querySelector("#falseAlert");

function validateEmail(email) {
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

button.addEventListener("click", function() {
    if (validateEmail(mail.value)) {
        if (pass.value === pass2.value) {
            trueAlert.style.display = "flex";
            falseAlert.style.display = "none";
        } 
        else {
            trueAlert.style.display = "none";
            falseAlert.style.display = "flex";
        }
    } else {
        trueAlert.style.display = "none";
        falseAlert.style.display = "flex";
    }
});
